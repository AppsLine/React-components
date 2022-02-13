import './ProgressBar.scss';

const ProgressBar = (props) => {
  return (
    props.width !== 0 ?
      <div className='ProgressBar progress'>
        <div
          className='progress-bar'
          role='progressbar'
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width: `${props.width}%`}}
        />
      </div>
    :
    null
  )
}

export default ProgressBar;