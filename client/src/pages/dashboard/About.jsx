import React from 'react'
import { GiWorld } from 'react-icons/gi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { GiFlexibleLamp } from 'react-icons/gi'
import { MdOutlineWork } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import '../../assets/styles/About.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="about">
        <div className="about__title">
          <h2>{t('About.title_1')}</h2>
          <p>{t('About.title_2')}</p>
        </div>
        <div className="about__content">
          <div className="content">
            <div className="content__image">
              <GiWorld size={'10rem'} />
            </div>
            <div className="content__title">World-class</div>
            <div className="content__text">
              <p>{t('About.Card_1_description1')}</p>
              <p>{t('About.Card_1_description2')}</p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <GiTakeMyMoney size={'10rem'} />
            </div>
            <div className="content__title">Affordable</div>
            <div className="content__text">
              <p>{t('About.Card_2_description1')}</p>
              <p>{t('About.Card_2_description2')}</p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <GiFlexibleLamp size={'10rem'} />
            </div>
            <div className="content__title">Flexible</div>
            <div className="content__text">
              <p>{t('About.Card_3_description1')}</p>
              <p>{t('About.Card_3_description2')}</p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <MdOutlineWork size={'9rem'} />
            </div>
            <div className="content__title">Job-relevant</div>
            <div className="content__text">
              <p>{t('About.Card_4_description1')}</p>
              <p>{t('About.Card_4_description2')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
