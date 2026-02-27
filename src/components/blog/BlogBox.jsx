import Row from '../Row'
import Button from '../UI/Button'

export default function BlogBox() {
  return (
    <div className={'h-[200px] w-full overflow-auto md:w-[33%] px-5 py-2 rounded-lg shadow shadow-black'}>
      <h3 className='font-semibold text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, doloribus!</h3>
      <p className='text-mute h-[55px] overflow-hidden text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odit similique excepturi sunt cumque harum velit architecto possimus neque illo.</p>
      <Row className='justify-between'>
        <div>fri Feb 13, 2026</div>
        <div>
          <Button className={''} variant='primary'>Career</Button>
        </div>
      </Row>
    </div>
  )
}
