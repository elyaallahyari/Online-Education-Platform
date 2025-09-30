import React from 'react'
import { GiWorld } from 'react-icons/gi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { GiFlexibleLamp } from 'react-icons/gi'
import { MdOutlineWork } from 'react-icons/md'
import '../../assets/styles/About.css'
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__title">
          <h2>World-Class Learning for Anyone, Anywhere</h2>
          <p>
            Coursera partners with more than 350+ leading universities and companies to bring
            flexible, affordable, job-relevant online learning to individuals and organizations
            worldwide.
          </p>
        </div>
        <div className="about__content">
          <div className="content">
            <div className="content__image">
              <GiWorld size={'10rem'} />
            </div>
            <div className="content__title">World-class</div>
            <div className="content__text">
              <p>Learn from experts at 350+ leading universities and companies.</p>
              <p>
                Earn recognized credentials from leading universities and companies to achieve your
                goals.
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <GiTakeMyMoney size={'10rem'} />
            </div>
            <div className="content__title">Affordable</div>
            <div className="content__text">
              <p>Explore hundreds of free courses or get started with a free trial.</p>
              <p>
                Earn a university degree and enjoy high-quality curriculum, affordable pricing, and
                flexible scheduling.
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <GiFlexibleLamp size={'10rem'} />
            </div>
            <div className="content__title">Flexible</div>
            <div className="content__text">
              <p>Get on-demand lectures for desktop and mobile—on your schedule.</p>
              <p>
                Choose from free courses, hands-on projects, certificate programs, and stackable
                credentials.
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content__image">
              <MdOutlineWork size={'9rem'} />
            </div>
            <div className="content__title">Job-relevant</div>
            <div className="content__text">
              <p>Master essential career skills based on comprehensive skills data.</p>
              <p>Master essential career skills based on comprehensive skills data.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
