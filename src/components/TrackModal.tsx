import CloseIcon from '@mui/icons-material/Close';
import TrackDetails, { TrackInfo } from './TrackDetails';
import {
  TrackDialog, TrackDialogCloseButton, TrackDialogContainer, TrackDialogTitle,
} from './TrackModal.styles';

interface TrackModalProps {
  open: boolean;
  track: TrackInfo | null;
  onClose: () => void;
}

export default function TrackModal({ open, track, onClose }: TrackModalProps) {
  if (!track) return null;

  return (
    <TrackDialog
      open={open}
      onClose={onClose}
      aria-labelledby="track-modal-title"
      slotProps={{ backdrop: { transitionDuration: 0 } }}
    >
      <TrackDialogContainer role="dialog" aria-modal="true" aria-labelledby="track-modal-title">
        <TrackDialogCloseButton aria-label="트랙 정보 모달 닫기" onClick={onClose}><CloseIcon /></TrackDialogCloseButton>
        <TrackDialogTitle id="track-modal-title">{track.track}</TrackDialogTitle>
        <TrackDetails track={track} />
      </TrackDialogContainer>
    </TrackDialog>
  );
}
