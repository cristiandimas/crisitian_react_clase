import React, { useState } from 'react';
import { Battery, Zap, Shield, Truck, Star, Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function VoltPedalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "VoltPedal Urban Pro",
      price: "$2,299",
      originalPrice: "$2,599",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      features: ["80km autonomía", "Motor 750W", "Batería extraíble", "Pantalla LCD"],
      rating: 4.8
    },
    {
      id: 2,
      name: "VoltPedal Mountain X",
      price: "$3,199",
      originalPrice: "$3,599",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      features: ["100km autonomía", "Motor 1000W", "Suspensión total", "Frenos hidráulicos"],
      rating: 4.9
    },
    {
      id: 3,
      name: "VoltPedal City Lite",
      price: "$1,599",
      originalPrice: "$1,899",
      image: "https://images.unsplash.com/photo-1553978297-833d24758719?w=400&h=300&fit=crop",
      features: ["60km autonomía", "Motor 500W", "Diseño plegable", "Peso ligero"],
      rating: 4.7
    },
    {
      id: 4,
      name: "VoltPedal Cargo Plus",
      price: "$2,899",
      originalPrice: "$3,299",
      image: "https://images.unsplash.com/photo-1544191696-15693072fb9d?w=400&h=300&fit=crop",
      features: ["90km autonomía", "Motor 850W", "Capacidad 150kg", "Carga familiar"],
      rating: 4.6
    }
  ];

  const accessories = [
    { name: "Casco Inteligente LED", price: "$159", image: "🪖" },
    { name: "Cargador Rápido", price: "$89", image: "🔌" },
    { name: "Batería Extra", price: "$599", image: "🔋" },
    { name: "Candado GPS", price: "$199", image: "🔒" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VoltPedal
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#productos" className="text-gray-700 hover:text-blue-600 transition-colors">Productos</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                Probar Ahora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 py-2">Inicio</a>
                <a href="#productos" className="text-gray-700 hover:text-blue-600 py-2">Productos</a>
                <a href="#servicios" className="text-gray-700 hover:text-blue-600 py-2">Servicios</a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 py-2">Contacto</a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full w-full mt-2">
                  Probar Ahora
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Revolución
                  </span>
                  <br />
                  <span className="text-gray-900">Eléctrica</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Descubre el futuro de la movilidad urbana con nuestras bicicletas eléctricas de última generación. 
                  Potencia, estilo y sostenibilidad en cada pedaleada.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center group">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Prueba Gratis
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Clientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-gray-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">24/7</div>
                  <div className="text-gray-600">Soporte</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                  alt="Bicicleta eléctrica VoltPedal"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ¡Nuevo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué VoltPedal?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnología avanzada, diseño elegante y compromiso con la sostenibilidad
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Battery className="h-12 w-12" />,
                title: "Batería Duradera",
                description: "Hasta 100km de autonomía con una sola carga"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Motor Potente",
                description: "Motores de hasta 1000W para cualquier terreno"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Garantía Total",
                description: "3 años de garantía en todos nuestros productos"
              },
              {
                icon: <Truck className="h-12 w-12" />,
                title: "Envío Gratis",
                description: "Entrega gratuita en toda la ciudad"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Modelos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encuentra la bicicleta eléctrica perfecta para tu estilo de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Oferta
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-3">{product.originalPrice}</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      Comprar Ahora
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-blue-600 transition-all">
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Accessories */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8">Accesorios Esenciales</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {accessories.map((accessory, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{accessory.image}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{accessory.name}</h4>
                  <div className="text-xl font-bold text-blue-600">{accessory.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Cuidamos tu inversión con servicios profesionales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Mantenimiento Premium</h3>
              <p className="text-gray-600 mb-6">Servicio técnico especializado para mantener tu bicicleta en perfectas condiciones.</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">Desde $89</div>
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Agendar Cita
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚴</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Alquiler por Horas</h3>
              <p className="text-gray-600 mb-6">Prueba nuestras bicicletas antes de comprar o úsalas para ocasiones especiales.</p>
              <div className="text-2xl font-bold text-purple-600 mb-4">$25/hora</div>
              <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Reservar Ahora
              </button>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-3xl text-center">
              <div className="bg-gradient-to-r from-pink-600 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Curso de Conducción</h3>
              <p className="text-gray-600 mb-6">Aprende a manejar tu bicicleta eléctrica de forma segura y eficiente.</p>
              <div className="text-2xl font-bold text-orange-600 mb-4">$159</div>
              <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">¿Listo para la Revolución?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Únete a miles de personas que ya han transformado su forma de moverse por la ciudad.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-blue-400" />
                  <span className="text-lg">+57 1 234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-blue-400" />
                  <span className="text-lg">info@voltpedal.co</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-blue-400" />
                  <span className="text-lg">Zona Rosa, Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Solicita Información</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                  type="tel" 
                  placeholder="Tu teléfono"
                  className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea 
                  placeholder="¿En qué te podemos ayudar?"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VoltPedal</span>
            </div>
            
            <div className="text-center">
              <p>&copy; 2025 VoltPedal. Todos los derechos reservados.</p>
              <p className="text-sm">Movilidad eléctrica para un futuro sostenible</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                f
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                @
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                in
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}