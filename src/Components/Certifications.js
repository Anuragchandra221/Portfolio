import React from 'react'
import Certification from './Certification'
import '../css/Certifications.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Certifications(props) {
    const showC = ()=>{
        document.getElementById('moreCertificate').classList.remove("moreCertificateHidden");
        document.getElementById('moreCertificate').classList.add("moreCertificate");
        document.getElementById('morec').style.display = "none";
    }
    const hideC = () =>{
        document.getElementById("moreCertificate").classList.add("moreCertificateHidden");
        document.getElementById("moreCertificate").classList.remove("moreCertificate");
        document.getElementById('morec').style.display = "block";
    }
  return (
    <AnimationOnScroll className="hidden" animateIn="show" initiallyVisible={true} animateOnce={true}>
            <div className='certifications mx-auto' id="certification">
        <p className='mt-2 pt-3 mb-4' style={{textAlign: 'start', color: '#fff', fontSize: 'xx-large', fontWeight: '900'}} >Certifications</p>
        <Certification 
        title="Python for Everybody Specialization" 
        platform="Coursera"
        university="University of Michigan"
        instructor="Charles Russell Severance"
        description="This was a specialization offered by the University of Michigan which included 5 courses."
        link="https://in.coursera.org/learn/python/home/welcome"
        certificate="https://coursera.org/share/b1638d05047426b5087fbdec53df8287"
        img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/08/33f720502a11e59e72391aa537f5c9/pythonlearn_thumbnail_1x1.png"
        />
        <div className='moreButton mx-auto' id="morec" onClick={showC}>More <FontAwesomeIcon  icon={faArrowDown} /></div>
        <div id="moreCertificate" className='moreCertificateHidden'>
            <Certification 
            title="Web Design for Everybody: Basics of Web Development & Coding Specialization" 
            platform="Coursera"
            university="University of Michigan"
            instructor="Colleen van Lent & Charles Russell Severance"
            description="This was a specialization offered by the University of Michigan which includes 5 courses."
            link="https://in.coursera.org/learn/html/home/welcome"
            certificate="https://in.coursera.org/account/accomplishments/specialization/9L8FFYPBARA8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
            img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/32/b88140502611e5bf374909c194f0db/introhtml_thumnail_1x1.png"
            />

            <Certification 
            title="Web Application Technologies and Django" 
            platform="Coursera"
            university="University of Michigan"
            instructor="Charles Russell Severance"
            description="This was a course offered by the University of Michigan which is a part of the Django for Everybody Specialization."
            link="https://in.coursera.org/learn/django-database-web-apps/home/welcome"
            certificate="https://coursera.org/share/3c3c0b59d40cc66cb75f2e600f81b2aa"
            img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/b2/c0ff8a544f4f778422f84cfa32eba9/dj4e_thumbnail_v1_1.jpg"
            />
            <Certification 
            title="React" 
            platform="Internshala"
            instructor="Andrii Hulenko & Arash Ahadzadeh"
            description="This was a training offered by the Internshala. This was a 6 week program which included completion of 3 projects."
            link="https://trainings.internshala.com/react-course/"
            certificate="https://trainings.internshala.com/uploads/certificates/COC-FB8E68F6-B886-F91A-32DA-3E916AB28602.jpg?t=1678038645"
            img="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/react.png"
            />

            <div className='moreButton mx-auto' onClick={hideC}>Less <FontAwesomeIcon  icon={faArrowUp} /></div>
        </div>

        

    </div>
    </AnimationOnScroll>
    
  )
}

export default Certifications