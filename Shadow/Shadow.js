import './Shadow.scss';

const Shadow = (props) => {
  return (
    <div className='Shadow'>
      {props.children}
      {props.active &&
        <div className={`content cursor-cancel ${props.design}`} />
      }
    </div>
  )
}

Shadow.defaultProps = {
  design: 'default'
}

export default Shadow;