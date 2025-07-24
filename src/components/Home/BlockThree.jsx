import React from "react";
import Img from "../..//assets/FirstPageImage/BlockThreeImg.png";
const BlockThree = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-[90%] mx-auto">
       <div className="flex items-center justify-between">
         
      <div className="">
        <img src={Img} alt="" className="" />
      </div>
    );
  };

  const StarRating = ({ rating, size = "w-4 h-4" }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
       </div>
      </div>
    </div>
  );
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">LUXURY</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Collections</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setShowProfile(true)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <User size={20} />
          </button>
          <button 
            onClick={() => setShowWishlist(true)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors relative"
          >
            <Heart size={20} className={wishlistItems.length > 0 ? 'fill-red-500 text-red-500' : ''} />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </button>
          <button 
            onClick={() => setShowCart(true)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors relative"
          >
            <ShoppingCart size={20} />
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {getTotalCartItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Cart Modal */}
      <Modal isOpen={showCart} onClose={() => setShowCart(false)} title="Корзина">
        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">Ваша корзина пуста</p>
              <p className="text-gray-500 text-sm mt-2">Добавьте товары для оформления заказа</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-100">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.color} • {item.size}</p>
                      <p className="text-amber-400 font-bold">${item.price * item.quantity}.00</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Кол-во: {item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-amber-400">${getTotalCartPrice()}.00</span>
                </div>
                <button 
                  onClick={proceedToCheckout}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors"
                >
                  Оформить заказ
                </button>
                <p className="text-center text-gray-400 text-sm mt-2">
                  🚚 Бесплатная доставка • ⚡️ Доставка через 2 дня
                </p>
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Checkout Modal */}
      <Modal isOpen={showCheckout} onClose={() => setShowCheckout(false)} title="Оформление заказа">
        <div className="p-6">
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-100 mb-3">Ваш заказ</h3>
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.name} ({item.color}, {item.size}) x{item.quantity}</span>
                    <span className="text-amber-400">${item.price * item.quantity}.00</span>
                  </div>
                ))}
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Итого:</span>
                    <span className="text-amber-400">${getTotalCartPrice()}.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div>
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                <MapPin size={20} className="mr-2" />
                Адрес доставки
              </h3>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Имя и фамилия"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Адрес"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="Город"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Индекс"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="font-semibold text-amber-100 mb-3 flex items-center">
                <CreditCard size={20} className="mr-2" />
                Способ оплаты
              </h3>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="payment" value="card" defaultChecked className="text-amber-500" />
                    <span>Банковская карта</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="payment" value="cash" className="text-amber-500" />
                    <span>Наличными при получении</span>
                  </label>
                </div>
                <input 
                  type="text" 
                  placeholder="Номер карты"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="CVV"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-amber-100 mb-2">Доставка</h4>
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="delivery" value="express" defaultChecked className="text-amber-500" />
                    <span>Экспресс доставка (2 дня)</span>
                  </div>
                  <span className="text-green-400 font-semibold">Бесплатно</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="delivery" value="standard" className="text-amber-500" />
                    <span>Обычная доставка (5-7 дней)</span>
                  </div>
                  <span className="text-green-400 font-semibold">Бесплатно</span>
                </label>
              </div>
            </div>

            {/* Complete Order Button */}
            <button 
              onClick={completeOrder}
              className="w-full py-4 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold text-lg transition-colors"
            >
              Подтвердить заказ на ${getTotalCartPrice()}.00
            </button>
            
            <div className="text-center text-gray-400 text-sm">
              <p>🔒 Безопасная оплата • 🛡 Защита покупателя</p>
              <p>📞 Поддержка 24/7 • 🔄 Возврат в течение 30 дней</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Wishlist Modal */}
      <Modal isOpen={showWishlist} onClose={() => setShowWishlist(false)} title="Избранное">
        <div className="p-6">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <Heart size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">Список избранного пуст</p>
              <p className="text-gray-500 text-sm mt-2">Добавьте товары, которые вам нравятся</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-100">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.color} • {item.size}</p>
                    <p className="text-amber-400 font-bold">${item.price}.00</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => addToCartFromWishlist(item)}
                      className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-semibold transition-colors"
                    >
                      В корзину
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Modal>

      {/* Profile Modal */}
      <Modal isOpen={showProfile} onClose={() => setShowProfile(false)} title="Профиль">
        <div className="p-6">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={40} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold text-amber-100 mb-2">Добро пожаловать!</h3>
            <p className="text-gray-400">Войдите в аккаунт для персонализации</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Пароль</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>
            <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors">
              Войти
            </button>
            <div className="text-center">
              <a href="#" className="text-amber-400 hover:text-amber-300 text-sm transition-colors">
                Забыли пароль?
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="font-semibold text-amber-100 mb-4">Быстрые действия</h4>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                📦 Мои заказы
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                ⚙️ Настройки
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                🎁 Программа лояльности
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors">
                📞 Поддержка
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Cart Notification */}
      {showCartNotification && (
        <div className="fixed top-20 right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 animate-pulse">
          <div className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <div>
              <p className="font-semibold">Добавлено в корзину!</p>
              <p className="text-sm">Доставка через 2 дня</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-900/20 to-black rounded-2xl p-8 h-96 flex items-center justify-center">
              <img 
                src={getSelectedColorData().image}
                alt="Luxurious Elixir"
                className="h-80 w-auto object-contain drop-shadow-2xl transition-all duration-500"
              />
            </div>
            {/* Color Selection Thumbnails */}
            <div className="flex space-x-4 mt-6 justify-center">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-16 h-16 rounded-lg border-2 transition-all duration-300 ${
                    selectedColor === color.id 
                      ? 'border-amber-500 scale-110' 
                      : 'border-gray-600 hover:border-amber-500/50'
                  }`}
                  style={{ backgroundColor: color.color }}
                >
                  <div className="w-full h-full rounded-lg flex items-center justify-center">
                    {selectedColor === color.id && (
                      <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-amber-100 mb-2">Luxurious Elixir</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Окунитесь в мир непревзойденной роскоши с нашим премиальным ароматом, который возвышает чарующую симфонию золота и 
                роскошных цветочных нот. Необычайный синтез золотых бликов и аромата драгоценных камней, одновременно 
                роскошный и мощный, идеально сбалансированный для воплощения духа драгоценной роскоши.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">(200 отзывов)</span>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Цвет: {getSelectedColorData().name}</h3>
              <div className="flex space-x-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all flex items-center space-x-2 ${
                      selectedColor === color.id 
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300' 
                        : 'border-gray-600 hover:border-amber-500/50'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-400"
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Объем</h3>
              <div className="flex space-x-4">
                {sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      selectedSize === sizeOption.size 
                        ? 'border-amber-500 bg-amber-500/10 text-amber-300' 
                        : 'border-gray-600 hover:border-amber-500/50'
                    }`}
                  >
                    {sizeOption.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-amber-400">
              ${getCurrentPrice()}.00
              {quantity > 1 && (
                <span className="text-lg text-gray-400 ml-2">
                  (${sizes.find(s => s.size === selectedSize)?.price}.00 за шт.)
                </span>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Кол-во:</span>
                <div className="flex items-center border border-gray-600 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-2 hover:bg-gray-800 transition-colors disabled:opacity-50"
                    disabled={quantity === 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-600 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 hover:bg-gray-800 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={toggleLike}
                className={`p-3 rounded-full border-2 transition-all ${
                  isLiked 
                    ? 'border-red-500 bg-red-500/10 text-red-500' 
                    : 'border-gray-600 hover:border-red-500/50'
                }`}
              >
                <Heart size={20} className={isLiked ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 rounded-lg font-semibold text-lg transition-all bg-amber-600 hover:bg-amber-700 active:scale-95"
            >
              Добавить в корзину
            </button>

            <div className="text-sm text-gray-400 space-y-1">
              <p>🚚 Бесплатная доставка при заказе от $200</p>
              <p>⚡️ Доставка через 2 дня</p>
              <p>🔒 Гарантия качества</p>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-amber-100">Детали продукта</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">
              Окунитесь в мир непревзойденной роскоши с Luxurious Elixir, изысканным ароматом, который создает чарующую симфонию золота и 
              роскоши. Эта смесь объединяет роскошную комбинацию, созданную из лучших эссенций и наполненную ароматом драгоценных камней, одновременно 
              роскошную и мощную. Аромат идеально сбалансирован, чтобы воплотить дух драгоценности, красоты и высшей формы 
              изысканной роскоши, которая абсолютно опьяняет чувства.
            </p>
          </div>
        </section>

        {/* The Golden Overture */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-100">Золотая увертюра</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">
              Luxurious Elixir открывается грандиозным всплеском сияющих цитрусовых и солнечных фруктов, воплощением золотых лучей, ласкающих ваши чувства. 
              Сердце богато расцветает букетом бархатистых роз и редких орхидей, их аромат сливается с очарованием драгоценного жасмина. По мере развития 
              аромата он раскрывает роскошную основу из янтарных пород дерева и роскошной ванили, создавая неизгладимое впечатление изысканности и утонченности.
            </p>
          </div>
        </section>

        {/* Key Notes */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-100">Ключевые ноты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-500/30">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Citrus Accord"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-200">Верхняя нота</h3>
              <p className="text-gray-400">Цитрусовый аккорд, солнечные фрукты</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-500/30">
                <img 
                  src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Rose Blooms"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-200">Сердечная нота</h3>
              <p className="text-gray-400">Золотые розы, редкие цветы</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-500/30">
                <img 
                  src="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Sandalwood"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-200">Базовая нота</h3>
              <p className="text-gray-400">Янтарь, ваниль, сандал</p>
            </div>
          </div>
        </section>

        {/* The Heart of Elegance */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-100">Сердце элегантности</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">
              Luxurious Elixir - это воплощение элегантности, позволяющее вам войти в мир, где царят гламур и престиж. С каждым распылением этот аромат 
              превращает вас в маяк гламура в толпе, усиливая вашу ауру и привлекая внимание окружающих.
            </p>
          </div>
        </section>

        {/* The Ultimate Expression of Luxury */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-100">Высшее выражение роскоши</h2>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed text-lg">
              Luxurious Elixir станет необычайным подарком, представляющим ваш изысканный вкус и понимание необычайного. Порадуйте своих близких 
              этим изысканным выражением утонченности и роскоши.
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl font-bold text-amber-400 mb-10">Reviews</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {reviewStats.map((stat, index) => (
                  <motion.div
                    key={stat.stars}
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <span className="text-sm w-8">{stat.stars}</span>
                    <StarRating rating={1} size="w-3 h-3" />
                    <ProgressBar percentage={stat.percentage} delay={index * 0.2} />
                    <span className="text-sm text-gray-400 w-8">{stat.count}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center">
                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <StarRating rating={5} size="w-6 h-6" />
                  <p className="text-2xl font-bold mt-2">5 out of 5</p>
                  <p className="text-gray-400 text-sm">98% of reviewers recommend this product</p>
                  <p className="text-gray-400 text-sm mt-2">50 reviews</p>
                  
                  <motion.button
                    className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAddReview(!showAddReview)}
                  >
                    <Plus size={16} />
                    Add a Review
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Add Review Form */}
          <AnimatePresence>
            {showAddReview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-4">Write a Review</h3>
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-600'
                            } hover:text-yellow-400 transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Review</label>
                    <textarea
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-32 resize-none"
                      placeholder="Write your review here..."
                      required
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Review
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowAddReview(false)}
                      className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* User Reviews */}
          <motion.div variants={itemVariants} className="space-y-6">
            {allReviews.slice(0, visibleReviews).map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
                onHoverStart={() => setHoveredReview(review.id)}
                onHoverEnd={() => setHoveredReview(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      {review.verified && (
                        <span className="bg-green-600 text-xs px-2 py-1 rounded">Verified</span>
                      )}
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-gray-300 mt-3 leading-relaxed">{review.text}</p>
                    <p className="text-gray-500 text-sm mt-3">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleReviews < allReviews.length + additionalReviews.length && (
            <motion.div variants={itemVariants} className="text-center mt-8">
              <motion.button
                onClick={handleLoadMore}
                className="border border-amber-400 text-amber-400 px-8 py-3 rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
              </motion.button>
            </motion.div>
          )}

          {/* Discover More Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">Discover More</h2>
            
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.custom-prev',
                  nextEl: '.custom-next',
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                className="luxury-swiper"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <motion.div
                      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300"
                      onHoverStart={() => setHoveredProduct(product.id)}
                      onHoverEnd={() => setHoveredProduct(null)}
                      whileHover={{ y: -10, scale: 1.05 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300">
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-white">{product.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold text-xl">{product.price}</span>
                          <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                        </div>
                        <motion.button
                          className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-amber-500 text-white p-3 rounded-full transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Custom Styles */}
      <style jsx global>{`
        .luxury-swiper .swiper-pagination-bullet {
          background-color: #6b7280;
          opacity: 1;
        }
        
        .luxury-swiper .swiper-pagination-bullet-active {
          background-color: #d97706;
        }
        
        .luxury-swiper .swiper-pagination {
          bottom: -40px;
        }
      `}</style>
    </div>
  );
}

export default App;