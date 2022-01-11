const Arrow = ({ className, onClick }) => {
  return (
    <svg className={className} onClick={onClick} viewBox='0 0 16 16'>
      <g
        id='Desktop-HD'
        transform='translate(-449.000000, -159.000000)'
        className='stroke-current'
        strokeWidth='1.5'
        fill='none'
      >
        <g id='arrow-up' transform='translate(450.000000, 160.000000)'>
          <line x1='7' y1='14' x2='7' y2='0' id='Path'></line>
          <polyline id='Path' points='0 7 7 0 14 7'></polyline>
        </g>
      </g>
    </svg>
  );
};

export default Arrow;
