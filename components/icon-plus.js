export default function ({ fill = 'currentColor', width = '1em', height = '1em', className = '', style = {} }) {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill={fill} xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
      <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
    </svg>
  )
}
