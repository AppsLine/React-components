import './Preloader.scss';

const Preloader = (props) => {
  return (
    props.show ?
      <div className='Preloader'>
        <div className='content'>
          <div className='a'></div>
          <div className='b'></div>
          <div className='c'></div>
        </div>
      </div>
    :
    null
  )
}

export default Preloader;