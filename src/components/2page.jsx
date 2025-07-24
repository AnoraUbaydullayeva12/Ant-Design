import React from 'react'
import zvezda from './assets/zvezda.png'
import Duhi from './assets/duhi.png'
import Gold from './assets/gold.png'
import Duhi2 from './assets/duhi2.png'
import Duhi3 from './assets/duhi3.png'
import Aqua from './assets/aqua.png' // название можешь сменить по-своему
import Angel from './assets/angel.png'

const App = () => {
  const products = [
    { name: 'Luxurious Elixir Rough', price: 220, image: Duhi },
    { name: 'The Golden Legacy', price: 160, image: Gold },
    { name: 'Luxurious Elixir', price: 250, image: Duhi2 },
    { name: 'Luxurious Essence', price: 260, image: Duhi3 },
    { name: 'Aurum Aura', price: 200, image: Duhi },
    { name: 'Gleaming Gilt', price: 160, image: Gold },
    { name: 'Gilded Elixir Rough', price: 170, image: Duhi2 },
    { name: 'Golden Luminary', price: 120, image: Duhi3 },
    { name: 'Decadent Opal', price: 160, image: Duhi },
    { name: 'Gilded Elixir', price: 200, image: Gold },
    { name: 'Glamourous Gilt', price: 160, image: Duhi2 },
    { name: 'Luxury Enigma', price: 190, image: Duhi3 },
  ]

  return (
    <div className="bg-black min-h-screen text-white">
      <main className="bg-black min-h-screen flex flex-col items-center">
        {/* Тайтл */}
        <section>
          <h1 className="text-[32px] text-[#AB572D] text-center pt-[105px]">
            Best Selling Products
          </h1>
        </section>

        {/* Карточки */}
        <section className="mt-10">
          <div>
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-[70px] mt-[65px]">
                {products.slice(row * 4, row * 4 + 4).map((product, index) => (
                  <div
                    key={index}
                    className="h-[420px] bg-[linear-gradient(to_right,_#0a0a0a_85%,_#ffffff1a_100%)] w-[260px] rounded-lg p-4"
                  >
                    <img src={product.image} alt="Perfume" className="object-contain" />
                    <h1 className="text-[20px] text-center">{product.name}</h1>
                    <img className="m-auto" src={zvezda} alt="Rating Stars" />
                    <h1 className="text-[#AB572D] text-[16px] text-center">
                      $ {product.price.toFixed(2)} <span className="text-white">100ml</span>
                    </h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* АКЦИИ */}
   <section className="w-full mt-[100px]">
  <h2 className="text-3xl text-center mb-10 text-white">Special Offers</h2>

  {/* Aqua Serenity - верхняя секция */}
  <div className="w-full flex flex-col md:flex-row bg-[#0b0b0c]">
    <img
      src={Aqua}
      alt="Aqua Serenity"
      className="w-full md:w-1/2 object-cover"
    />
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-white">
      <h3 className="text-[46px] mb-32 ">Limited Time Offer: 20% OFF on Aqua Serenity Perfume!</h3>
      <h1 className="text-[50px] ">Aqua Serenity</h1>
      <p className="text-cyan-400 text-[36px] mb-2">Embrace the Tranquil Tides</p>
      <p className="text-sm text-gray-300 mb-4">
        Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.
      </p>
      <button className="border border-white px-4 py-2 rounded mt-[57px] hover:bg-cyan-600 transition w-fit">Know More</button>
    </div>
  </div>

  {/* Golden Angel - нижняя секция */}
  <div className="w-full flex flex-col-reverse md:flex-row bg-[#0b0b0c] mt-8">
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-white">
      <h3 className="text-xl text-[46px] mb-32">Limited Time Offer: 25% OFF on Golden Angel Perfume!</h3>
      <h1 className="text-3xl text-[50px] font-semibold">Golden Angel</h1>
      <p className="text-yellow-400 text-[36px] mb-2">Unleash Your Divine Glow</p>
      <p className="text-sm text-gray-300 mb-4">
        Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial <br /> elegance and radiance.
      </p>
      <button className="border border-white mt-[57px] px-4 py-2 rounded hover:bg-yellow-600 transition w-fit">Know More</button>
    </div>
    <img
      src={Angel}
      alt="Golden Angel"
      className="w-full md:w-1/2 object-cover"
    />
  </div>
</section>


      </main>
    </div>
  )
}

export default App
