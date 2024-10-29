import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptates neque vel. Cum, tempore impedit accusantium cupiditate asperiores recusandae tempora.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi placeat pariatur totam et consequatur. Quae dolorum, fugit aliquid quibusdam, amet facere excepturi labore temporibus cum nemo nam inventore consequatur voluptatibus, rerum ducimus corrupti atque illo pariatur quas perspiciatis porro.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea autem impedit nesciunt veritatis quasi animi quia adipisci earum asperiores nisi.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'> 
        <div className="border px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta voluptatem quis, cumque totam tempore vitae consequuntur corrupti aspernatur nulla, rerum delectus recusandae, laborum excepturi.</p>
        </div>

        <div className="border px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Convinence</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta voluptatem quis, cumque totam tempore vitae consequuntur corrupti aspernatur nulla, rerum delectus recusandae, laborum excepturi.</p>
        </div>

        <div className="border px-10  md:px-16 py-8  sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta voluptatem quis, cumque totam tempore vitae consequuntur corrupti aspernatur nulla, rerum delectus recusandae, laborum excepturi.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About