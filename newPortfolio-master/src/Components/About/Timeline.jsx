import React from 'react'
import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarRateIcon from '@material-ui/icons/StarRate'
import { ThemeContext } from '../../Context/theme'

export const Timeline = () => {
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
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={'NOV 2021 - PRESENT'}
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
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School (Remote)
            </h4>
            <p data-aos="fade-right">
              Joined the Military style Bootcamp to learn Software Development
              and Data Structures. Also learned many soft skills in the process.
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
              Reconciling payable reports monthly to confirm the accuracy.
              Maintaining petty cash accounts and paying sales tax on invoices and make not of each tax payment made were some of my daily tasks.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={'NOV 2015 - JUN 2018'}
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
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Bachelor of Commerce, Accountancy Honors
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right">Marwari College, Ranchi, Jharkhand</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={'MAY 2015'}
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
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Completed Higher Secondary - Commerce
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            ></h4>
            <p data-aos="fade-right">
              Kendriya Vidyalaya Namkum, Ranchi, Jharkhand
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}
