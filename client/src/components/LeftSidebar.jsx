import React from 'react'
import '../assets/styles/LeftSidebar.css'
import SideMenuItem from './SideMenuItem'
import { useTranslation } from 'react-i18next'
import { MdOutlinePlayLesson } from 'react-icons/md'
import { TbCategoryFilled } from 'react-icons/tb'
import { HiTrendingUp } from 'react-icons/hi'
import { PiExamFill } from 'react-icons/pi'
import { IoIosInformationCircle } from 'react-icons/io'

const LeftSidebar = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__menu">
          <SideMenuItem
            name={t('leftـsidebar.Trendingـskills')}
            icon={<HiTrendingUp />}
            to={'trending'}
          />
          <SideMenuItem
            name={t('leftـsidebar.Courses')}
            icon={<MdOutlinePlayLesson />}
            to={'courses'}
          />
          <SideMenuItem
            name={t('leftـsidebar.Categories')}
            icon={<TbCategoryFilled />}
            to={'categories'}
          />
          <SideMenuItem name={t('leftـsidebar.Exams')} icon={<PiExamFill />} to={'exams'} />
          <SideMenuItem
            name={t('leftـsidebar.About_us')}
            icon={<IoIosInformationCircle />}
            to={'about'}
          />
        </div>
      </div>
    </>
  )
}

export default LeftSidebar
