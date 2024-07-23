import Image from 'next/image';
import img1 from './img1.jpg'; 
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg'; 

const Services = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-black font-bold text-4xl mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img1}
              alt="Permanent Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Permanent Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img2}
              alt="Temporary Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Temporary Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img3}
              alt="Contract Staffing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Contract Staffing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img4}
              alt="Executive Search"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Executive Search</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img5}
              alt="Recruitment Process Outsourcing"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Recruitment Process Outsourcing</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img6}
              alt="Payroll Services"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Payroll Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
