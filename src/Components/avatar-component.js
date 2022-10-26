import { useState } from 'react';
import testimonials from '../data/data.js';

export default function AvatarComponent(){
    const [propertiesInfo] = useState(testimonials);
    const [subject, setSubject] = useState(testimonials[0]);

    const nextTestimonial = () => {
        const newIndex = subject.index + 1;
        setSubject(propertiesInfo[newIndex]);
      };
    
      const prevTestimonial = () => {
        const newIndex = subject.index - 1;
        setSubject(propertiesInfo[newIndex]);
      };

      const {id, index, name, avatar, position, testimonial} = subject;

    return (
        <div className="bg-avatar"> 
            <div key={id}>
                <div>
                    <img src={avatar} alt="" className="avatar" />
                </div>
                <div className="bg-quotes">
                    <img src="/images/pattern-quotes.svg" alt="" className="quotes" />
                    <p className="testimonial">"{testimonial}"</p>
                    <p className='testimonial-name'><strong>{name}</strong></p>
                    <p className='testimonial-position'>{position}</p>
                </div>
            </div>
            
            <button onClick={prevTestimonial} disabled={index === 0}>
                <img src="/images/icon-prev.svg" alt="" className="prev"/>
            </button>
            <button onClick={nextTestimonial} disabled={index === 1}>
                <img src="/images/icon-next.svg" alt="" className="next" />
            </button>
        </div>
    )
}