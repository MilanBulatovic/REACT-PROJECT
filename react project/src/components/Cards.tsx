
import Card from './Card'
import { CardProps } from '../interface/Card';

const Cards = () => {
    const cardData: CardProps[] = [
        {
          title: "Product Launch",
          desc: "Join us for the exciting launch event of our latest product!",
          backgroundColor: "#FF5733",
          btnText: "Register Now",
          role: "dev"
        },
        {
          title: "Job Opportunity",
          desc: "We're hiring talented individuals to join our team. Apply now!",
          backgroundColor: "#3B5998",
          btnText: "Apply Now",
          role: "employer"
        }
      ];
    
  return (
    <>
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

      {cardData.map((card, index) => (
       
          <Card 
            key={index} 
            role={card.role} 
            title={card.title} 
            desc={card.desc}
            backgroundColor={card.backgroundColor}
            btnText={card.btnText} 
          />
        
      ))}
      </div>
    </div>
  </section>
  </>
  )
}

export default Cards