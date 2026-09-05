import CloseIcon from '@mui/icons-material/Close';
import { tracksInfo } from '../utils/commons';
import {
  CurriculumList,
  CurriculumListItem,
  CurriculumMarker,
  CurriculumWeek,
  LookingForList,
  LookingForListItem,
  LookingForMarker,
  TrackDialog,
  TrackDialogCloseButton,
  TrackDialogContainer,
  TrackDialogContent,
  TrackDialogDescription,
  TrackDialogSection,
  TrackDialogSectionTitle,
  TrackDialogTitle,
} from './TrackModal.styles';

type TrackInfo = (typeof tracksInfo)[number];

interface TrackModalProps {
  open: boolean;
  track: TrackInfo | null;
  onClose: () => void;
}

function getAlphabetMarker(index: number) {
  return String.fromCharCode(65 + index);
}

export default function TrackModal({ open, track, onClose }: TrackModalProps) {
  if (!track) return null;

  return (
    <TrackDialog open={open} onClose={onClose} aria-labelledby="track-modal-title">
      <TrackDialogContainer>
        <TrackDialogCloseButton aria-label="트랙 정보 모달 닫기" onClick={onClose}>
          <CloseIcon />
        </TrackDialogCloseButton>

        <TrackDialogTitle id="track-modal-title">{track.track}</TrackDialogTitle>

        <TrackDialogContent>
          <TrackDialogSection>
            <TrackDialogSectionTitle>CURRICULUM</TrackDialogSectionTitle>
            <CurriculumList>
              {track.curriculum.map((item, index) => (
                <CurriculumListItem key={item}>
                  <CurriculumMarker />
                  <CurriculumWeek>W {String(index + 1).padStart(2, '0')}</CurriculumWeek>
                  <TrackDialogDescription>{item}</TrackDialogDescription>
                </CurriculumListItem>
              ))}
            </CurriculumList>
          </TrackDialogSection>

          <TrackDialogSection>
            <TrackDialogSectionTitle>WHO WE ARE LOOKING FOR:</TrackDialogSectionTitle>
            <LookingForList>
              {track.lookingFor.map((item, index) => (
                <LookingForListItem key={item}>
                  <LookingForMarker>{getAlphabetMarker(index)}</LookingForMarker>
                  <TrackDialogDescription>{item}</TrackDialogDescription>
                </LookingForListItem>
              ))}
            </LookingForList>
          </TrackDialogSection>
        </TrackDialogContent>
      </TrackDialogContainer>
    </TrackDialog>
  );
}
