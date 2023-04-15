import React from 'react'
import './Experience.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import WorkIcon from '@material-ui/icons/Work'
import { ThemeContext } from '../../Context/theme'

export const Experience = () => {
  const [{ themename }] = React.useContext(ThemeContext)
  const [linecolor, setlinecolor] = React.useState(
    themename === 'light' ? '#23283e' : '#fcfcfc',
  )

  React.useEffect(() => {
    if (themename === 'dark') {
      setlinecolor('#fcfcfc')
    } else {
      setlinecolor('#23283e')
    }
  }, [themename])
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Professional Experience 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={'SEP 2022 - DEC 2022'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              // textAlign: 'center',
              textAlign: 'left',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: '16px solid  rgb(33, 150, 243)' }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              MERN Stack Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Webvillee Technology Pvt. Ltd (Indore), Madhya Pradesh
            </h4>
            <p data-aos="fade-right">
              Developed and maintained multiple web applications using a variety
              of technologies such as React and NoSQL. <p>Designed and implemented
              RESTful APIs to enable efficient communication between the
              front-end and back-end systems.</p> 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={'JUL 2018 - JUN 2021'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: '16px solid  rgb(33, 150, 243)' }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Accounts Payable
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              TCS (Gitanjali Park), Kolkata
            </h4>
            <p data-aos="fade-right">
              Managed the Accounts Payable process, including verifying and
              processing invoices, reconciling vendor statements, and ensuring
              timely payment of bills. <p>Maintained accurate records of all
              Accounts Payable transactions and ensured compliance with
              accounting standards and company policies.</p> 
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  )
}
