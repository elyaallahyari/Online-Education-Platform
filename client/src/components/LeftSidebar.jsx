import React from 'react'
import '../assets/styles/LeftSidebar.css'
import SideMenuItem from './SideMenuItem'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { IoLogoSoundcloud } from 'react-icons/io5'
import { TbCategoryFilled } from 'react-icons/tb'
import { HiTrendingUp } from 'react-icons/hi'
import { PiExamFill } from 'react-icons/pi'
import { IoIosInformationCircle } from 'react-icons/io'

const LeftSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo">
          <IoLogoSoundcloud size={'90'} />
          <span>Platform</span>
        </div>

        <div className="sidebar__menu">
          <SideMenuItem name={'Trending skills'} icon={<HiTrendingUp />} to={'trending'} />
          <SideMenuItem name={'Courses'} icon={<MdOutlinePlayLesson />} to={'courses'} />
          <SideMenuItem name={'Categories'} icon={<TbCategoryFilled />} to={'categories'} />
          <SideMenuItem name={'Exams'} icon={<PiExamFill />} to={'exams'} />
          <SideMenuItem name={'About us'} icon={<IoIosInformationCircle />} to={'about'} />
        </div>
      </div>
    </>
  )
}

export default LeftSidebar
