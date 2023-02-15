import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  TextField,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import GoogleIcon from '@mui/icons-material/Google';
import { auth } from '../service/firebase';
import { googleLogin, handleClickLogoutBtn, logout } from '../service/auth';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';
import { checkEmail, displayTimeKo } from '../utils/functions';
import { useSnackbar } from 'notistack';
import { IFormData } from '../types';
import { getApply, getSave, setApply, setSave } from '../apis/apply';

const defaultFormData = {
  name: '',
  email: '',
  studentNumber: '',
  field: '',
  answer1: '',
  answer2: '',
  answer3: '',
  link: '',
};

export default function Apply() {
  const { enqueueSnackbar } = useSnackbar();
  const [init, setInit] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [saveData, setSaveData] = useState<IFormData | null>(null);
  const [applyData, setApplyData] = useState<IFormData | null>(null);
  const isLogin = Boolean(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    control,
  } = useForm<IFormData>({
    defaultValues: defaultFormData,
  });
  const onSave = async (data: IFormData) => {
    await setSave(data);
    const saveData = await getSave();
    setSaveData(saveData);
    enqueueSnackbar('임시 저장되었습니다.');
  };
  const onSubmit = async (data: IFormData) => {
    await setSave(data);
    await setApply(data);
    const saveData = await getSave();
    const applyData = await getApply();
    setSaveData(saveData);
    setApplyData(applyData);
    enqueueSnackbar('성공적으로 제출되었습니다!', { variant: 'success' });
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const name = user.displayName?.replace('학부생', '') ?? '';
        const email = user.email ?? '';
        if (!checkEmail(email)) {
          await logout();
          enqueueSnackbar('한동대학교 계정으로 로그인해주세요.', { variant: 'error' });
          return;
        }
        setValue('name', name);
        setValue('email', email);
        const saveData = await getSave();
        const applyData = await getApply();
        setSaveData(saveData);
        setApplyData(applyData);
      } else {
        reset(defaultFormData);
        setSaveData(null);
        setApplyData(null);
      }
      setUser(user);
      setInit(true);
    });
  }, [enqueueSnackbar, setValue, reset]);
  useEffect(() => {
    if (saveData) {
      reset(saveData);
    }
  }, [saveData, reset]);

  return (
    <>
      <Helmet>
        <title>지원하기 - 멋쟁이사자처럼 한동대</title>
      </Helmet>
      {init ? (
        <>
          {user ? (
            <Button variant="contained" color="error" onClick={handleClickLogoutBtn}>
              로그아웃
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={googleLogin}
              startIcon={<GoogleIcon />}
            >
              한동대학교 계정으로 로그인
            </Button>
          )}
          <Box sx={{ height: 32 }} />
          {applyData && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {displayTimeKo(applyData.updatedAt.toDate())}에 최종 제출되었습니다.
            </Alert>
          )}
          <Box>
            <InputLabel>이름</InputLabel>
            <TextField
              {...register('name', { required: '필수 입력 항목입니다.' })}
              size="small"
              placeholder="이름을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              sx={{ width: 240 }}
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>이메일</InputLabel>
            <TextField
              {...register('email', {
                required: '필수 입력 항목입니다.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '유효하지 않은 이메일 형식입니다.',
                },
              })}
              size="small"
              placeholder="이메일을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              sx={{ width: 240 }}
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>학번</InputLabel>
            <TextField
              {...register('studentNumber', {
                required: '필수 입력 항목입니다.',
                minLength: { value: 8, message: '학번 8글자를 입력해주세요.' },
                maxLength: { value: 8, message: '학번 8글자를 입력해주세요.' },
              })}
              size="small"
              placeholder="학번을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.studentNumber)}
              helperText={errors.studentNumber?.message}
              sx={{ width: 240 }}
              type="number"
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>지원분야</InputLabel>
            <FormControl>
              <Controller
                name="field"
                control={control}
                rules={{ required: '필수 입력 항목입니다.' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    ref={register('field').ref}
                    size="small"
                    disabled={!isLogin}
                    error={Boolean(errors.field)}
                    sx={{ width: 240 }}
                    displayEmpty
                  >
                    <MenuItem value="" sx={{ display: 'none' }}>
                      지원분야를 선택하세요.
                    </MenuItem>
                    <MenuItem value="기획">기획</MenuItem>
                    <MenuItem value="디자인">디자인</MenuItem>
                    <MenuItem value="프론트엔드">프론트엔드</MenuItem>
                    <MenuItem value="백엔드">백엔드</MenuItem>
                  </Select>
                )}
              />
              {errors.field && <FormHelperText error={true}>{errors.field.message}</FormHelperText>}
            </FormControl>
            <Box sx={{ height: 16 }} />
            <InputLabel>질문1</InputLabel>
            <TextField
              {...register('answer1', { required: '필수 입력 항목입니다.' })}
              size="small"
              placeholder="답변을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.answer1)}
              helperText={errors.answer1?.message}
              multiline
              rows={8}
              fullWidth
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>질문2</InputLabel>
            <TextField
              {...register('answer2', { required: '필수 입력 항목입니다.' })}
              size="small"
              placeholder="답변을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.answer2)}
              helperText={errors.answer2?.message}
              multiline
              rows={8}
              fullWidth
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>질문3</InputLabel>
            <TextField
              {...register('answer3', { required: '필수 입력 항목입니다.' })}
              size="small"
              placeholder="답변을 입력하세요."
              disabled={!isLogin}
              error={Boolean(errors.answer3)}
              helperText={errors.answer3?.message}
              multiline
              rows={8}
              fullWidth
            />
            <Box sx={{ height: 16 }} />
            <InputLabel>추가 링크 (선택)</InputLabel>
            <TextField
              {...register('link')}
              size="small"
              placeholder="포트폴리오나 블로그 링크가 있으면 입력해주세요."
              disabled={!isLogin}
              error={Boolean(errors.link)}
              helperText={errors.link?.message}
              fullWidth
            />
            <Box sx={{ height: 32 }} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="contained"
                color="inherit"
                disabled={!isLogin}
                onClick={handleSubmit(onSave)}
              >
                임시 저장
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={!isLogin}
                onClick={handleSubmit(onSubmit)}
              >
                지원하기
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Skeleton variant="rounded" width={100} height={36} />
          <Box sx={{ height: 32 }} />
          <Skeleton variant="rounded" height={400} />
        </>
      )}
    </>
  );
}
