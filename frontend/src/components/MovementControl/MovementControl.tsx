import { useState } from 'react';
import Icon from '@mdi/react';
import { 
  mdiArrowLeftTopBold, 
  mdiArrowRightTopBold, 
  mdiArrowUpCircle, 
  mdiArrowLeftBottomBold, 
  mdiArrowRightBottomBold, 
  mdiArrowDownCircle,
  mdiRotateLeft,
  mdiRotateRight,
  mdiStop,
  mdiAmmunition,
  mdiFire,
} from '@mdi/js';
import { Button } from '../Button';
import { 
  useActionFireMutation,
  useActionStopMutation, 
  useActionMoveMutation,
} from '../../api/tankApi';

export function MovementControl () {
    const [ actionFire ] = useActionFireMutation();
    const [ actionStop ] = useActionStopMutation();
    const [ actionMove ] = useActionMoveMutation();
    const [movingSince, setMovingSince] = useState(0);
    const fireBtnClassName = 'Btn-movement min-w-[18rem] min-h-[4rem] md:min-w-[30rem]';
    const moveBtnClassName = 'Btn-movement min-w-[6rem] min-h-[6rem] md:min-w-[10rem] md:min-h-[10rem]';

    function onTriggerFire(event: React.MouseEvent<HTMLElement>) {
      event.preventDefault();
      actionFire('fire');
    }

    function onBtnStop(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) {
      event.preventDefault();
      actionStop('stop');
      setMovingSince(0);
    }

    function onBtnMoveUp(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) {
      event.preventDefault();
      let stopTime = new Date();
      if (movingSince !== 0 && (stopTime.getTime() - movingSince) < 1500 ) {
        actionStop('stop');
        setMovingSince(0);
      }
    }

    function onBtnMoveDown(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>, direction: string) {
      let moveStartTime = new Date();
      setMovingSince(moveStartTime.getTime());
      actionMove(direction);
    }

    return (
        <div className="grid grid-row-5 grid-flow-row">
          <div className="row-auto">
            <Button onClick={(e) => onTriggerFire(e)} color="blue" className={fireBtnClassName}>
              <Icon path={mdiFire} size={2} />
              <Icon path={mdiAmmunition} size={2} />
              <Icon path={mdiFire} size={2} />
            </Button>
          </div>
          <div className="row-auto"><div className="min-h-[4rem]">&nbsp;</div></div>
          <div className="row-auto">
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'front-left')} 
              onMouseUp={(e) => onBtnMoveUp(e)}
              onTouchStart={(e) => onBtnMoveDown(e, 'front-left')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowLeftTopBold} size={3} />
            </Button>
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'forward')} 
              onMouseUp={(e) => onBtnMoveUp(e)}
              onTouchStart={(e) => onBtnMoveDown(e, 'forward')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowUpCircle} size={3} />
            </Button>
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'front-right')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'front-right')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowRightTopBold} size={3} />
            </Button>
          </div>
          <div className="row-auto">
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'spin-left')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'spin-left')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiRotateLeft} size={3} />
            </Button>
            <Button onClick={(e) => onBtnStop(e)} color="blue" className={moveBtnClassName}>
              <Icon path={mdiStop} size={3} />
            </Button>
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'spin-right')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'spin-right')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiRotateRight} size={3} />
            </Button>
          </div>
          <div className="row-auto">
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'back-left')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'back-left')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowLeftBottomBold} size={3} />
            </Button>
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'backward')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'backward')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowDownCircle} size={3} />
            </Button>
            <Button 
              onMouseDown={(e) => onBtnMoveDown(e, 'back-right')} 
              onMouseUp={(e) => onBtnMoveUp(e)} 
              onTouchStart={(e) => onBtnMoveDown(e, 'back-right')} 
              onTouchEnd={(e) => onBtnMoveUp(e)}
              color="blue" 
              className={moveBtnClassName}
            >
              <Icon path={mdiArrowRightBottomBold} size={3} />
            </Button>
          </div>
        </div>
    );
}