const CloseIcon = ({ className }) => {
  return (
    <div>
      <svg className={className} viewBox='0 0 14 14'>
        <g
          transform='translate(1, 1)'
          className='stroke-current'
          strokeWidth='2'
        >
          <line x1='12' y1='0' x2='0' y2='12'></line>
          <line x1='0' y1='0' x2='12' y2='12'></line>
        </g>
      </svg>
    </div>
  );
};

export default CloseIcon;
