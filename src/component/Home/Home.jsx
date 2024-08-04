import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(https://i.ibb.co/cwFZhNt/engin-akyurt-us-RA3jj-RL4k-unsplash.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10 px-6 md:px-12 lg:px-20 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="mb-6 text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
              The history of pets is intertwined with the process of animal domestication. Likely, the dog was the first
              domesticated species and the first pet. Early domestication may have begun with capturing young wild animals
              and bringing them into human homes as pets.
            </p>
          </div>
        </div>
      </div>

      {/* Pets Information Section */}
      <div className="pets-info py-16 px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Learn About Pets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Template */}
          {[
            {
              img: 'https://i.ibb.co/m9bbks0/freddie-marriage-i-YQC9x-WMvw4-unsplash.jpg',
              title: 'Cat',
              description: 'Cats are captivating and often mysterious companions with unique personalities. They blend elegance with wild instincts and provide a sense of tranquility to any home.'
            },
            {
              img: 'https://i.ibb.co/zR4Pggp/celine-sayuri-tagami-2s6-ORa-JY6g-I-unsplash.jpg',
              title: 'Dog',
              description: 'Dogs are loyal companions known for their affectionate nature and keen senses. They bring joy, security, and deep bonds with their owners, enriching family life.'
            },
            {
              img: 'https://i.ibb.co/y8ZRydf/zoe-ra-sir-Ep-Wjf-Smo-unsplash.jpg',
              title: 'Dog',
              description: 'Dogs, with their variety of breeds and temperaments, offer unconditional love and support. Their playful demeanor and ability to form deep connections make them cherished family members.'
            }
          ].map((item, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <figure className="w-full h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body p-6 text-center">
                <h2 className="card-title text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-md text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-6 md:px-12 lg:px-20">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">Heartwarming Adoption Stories</h2>
    <p className="text-lg text-gray-700 mb-12">Read inspiring stories of pets who have found their forever homes and the joy they bring to their new families.</p>
    
    <div className="flex flex-wrap justify-center gap-8">
      
      {/* Success Story 1 */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl w-full sm:w-80 group">
        <img src="https://i.ibb.co/YQTS3M5/success-story-1.jpg" alt="Luna's Success Story" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Luna's Transformation</h3>
          <p className="text-gray-700 mb-4">Luna, once a timid kitten, has blossomed into a confident and playful cat. Now cherished by the Johnson family, Luna's presence brings warmth and cheer to her new home.</p>
          <a href="#" className="text-blue-400 font-semibold hover:underline">See Luna's Journey</a>
        </div>
      </div>

      {/* Success Story 2 */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl w-full sm:w-80 group">
        <img src="https://i.ibb.co/cYw5kT2/success-story-2.jpg" alt="Max's Success Story" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Max's New Adventures</h3>
          <p className="text-gray-700 mb-4">Max, a spirited Beagle, now thrives in the great outdoors with the Smith family. His boundless enthusiasm for hiking and playtime has made him a perfect companion.</p>
          <a href="#" className="text-blue-400 font-semibold hover:underline">Explore Max's Story</a>
        </div>
      </div>

      {/* Success Story 3 */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl w-full sm:w-80 group">
        <img src="https://i.ibb.co/6DKf8Pz/success-story-3.jpg" alt="Bella's Success Story" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bella's Happy Home</h3>
          <p className="text-gray-700 mb-4">Bella, a joyful Golden Retriever, has found a loving home with the Garcia family. Her playful antics and affectionate nature bring smiles to everyone she meets.</p>
          <a href="#" className="text-blue-400 font-semibold hover:underline">Read Bella's Story</a>
        </div>
      </div>

      {/* Success Story 4 */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl w-full sm:w-80 group">
        <img src="https://i.ibb.co/4ghKfHt/success-story-4.jpg" alt="Charlie's Success Story" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Charlie's New Chapter</h3>
          <p className="text-gray-700 mb-4">Charlie, a gentle cat, has found a forever home with the Andersons. His calm demeanor and loving personality have made him a treasured part of their family.</p>
          <a href="#" className="text-blue-400 font-semibold hover:underline">Discover Charlie's Journey</a>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Action Section */}
      <div className="action py-16 px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Take Action</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
          {[
            { img: 'https://i.ibb.co/19H7Gxm/berkay-gumustekin-ngqyo2-AYYn-E-unsplash.jpg', text: 'Give a pet a new home and a better life. Adopt today and make a difference!' },
            { img: 'https://i.ibb.co/YDv34wq/hendo-wang-Ds-Ge-UBa-JPwc-unsplash.jpg', text: 'Your new best friend is waiting. Bring joy and love into your home by adopting a pet.' },
            { img: 'https://i.ibb.co/K99c13G/bill-stephan-9-Lkqym-ZFLr-E-unsplash.jpg', text: 'Open your heart and home to a furry friend. Adopt a pet and change a life.' }
          ].map((item, index) => (
            <div key={index} className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <img src={item.img} alt="Adopt a pet" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img src="https://i.ibb.co/264g3sG/onur-binay-E18n-Z-OHh04-unsplash.jpg" alt="About Us" className="rounded-full h-64 w-64 object-cover mx-auto" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4">
                At Our Pet Paradise, we are dedicated to connecting pets with loving families and ensuring they receive
                the care and attention they deserve. With extensive experience in pet adoption and welfare, we strive
                to make the adoption process seamless and joyful for both pets and their new owners.
              </p>
              <p className="text-lg text-gray-700">
                Our team works diligently to ensure every pet finds their perfect match, turning each adoption into a
                lifelong success story. We believe every pet deserves a loving home, and we are committed to making
                that a reality, one adoption at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Adoption Process Section */}
      <div className="adoption-process bg-gray-300 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Our Adoption Process</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Our adoption process is designed to ensure that each pet finds the perfect match and that every adoption is a
            lifelong success story. It begins with a thorough application review, followed by a meet-and-greet session to
            assess compatibility. Once approved, we provide guidance and support to help integrate your new pet seamlessly
            into your home.
          </p>
        </div>
      </div>

      {/* Volunteer Opportunities Section */}
      <div className="volunteer-opportunities bg-gray-200 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Volunteer Opportunities</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Join our passionate team of volunteers and make a difference in the lives of pets in need. Whether you're
            walking dogs, socializing cats, or assisting with administrative tasks, your time and effort contribute to
            creating happier, healthier environments for our furry friends. Volunteer today and experience the joy of
            giving back to your community.
          </p>
        </div>
      </div>

       
    </div>
  );
};

export default Home;
