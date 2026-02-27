import Row from '../Row'
import Button from '../UI/Button'

export default function BlogBox() {
  return (
    <div className='w-full md:w-[32%] 
                    bg-white rounded-2xl 
                    p-6 shadow-md 
                    hover:shadow-xl 
                    transition duration-300 
                    hover:-translate-y-2'>

      {/* Title */}
      <h3 className='font-semibold text-xl mb-3 line-clamp-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </h3>

      {/* Description */}
      <p className='text-mute text-base mb-4 line-clamp-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corporis odit similique excepturi sunt cumque harum velit 
        architecto possimus neque illo.
      </p>

      {/* Footer */}
      <Row className='justify-between items-center mt-auto'>

        <span className='text-sm text-gray-500'>
          Feb 13, 2026
        </span>

        <Button 
          variant='primary'
          className='text-xs px-3 py-1 rounded-full'>
          Career
        </Button>

      </Row>
    </div>
  )
}