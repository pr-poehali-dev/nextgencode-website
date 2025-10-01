import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const courses = [
    {
      icon: '🎮',
      title: 'Scratch Junior',
      age: '5-7 лет',
      description: 'Первые шаги в программировании через создание игр и анимаций',
      price: '3 500 ₽/мес'
    },
    {
      icon: '🚀',
      title: 'Python для детей',
      age: '8-12 лет',
      description: 'Изучаем Python через создание игр, ботов и веб-приложений',
      price: '4 200 ₽/мес'
    },
    {
      icon: '💻',
      title: 'Web-разработка',
      age: '10-14 лет',
      description: 'Создаём сайты и приложения на HTML, CSS и JavaScript',
      price: '4 500 ₽/мес'
    },
    {
      icon: '🎯',
      title: 'Unity & Game Dev',
      age: '12-16 лет',
      description: 'Разрабатываем 2D и 3D игры на движке Unity',
      price: '5 000 ₽/мес'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      avatar: '👩',
      text: 'Мой сын в восторге! За 3 месяца создал свою первую игру. Преподаватели объясняют сложное простым языком.',
      course: 'Python для детей'
    },
    {
      name: 'Дмитрий Смирнов',
      avatar: '👨',
      text: 'Отличная школа! Дочка научилась создавать сайты и теперь хочет стать программистом.',
      course: 'Web-разработка'
    },
    {
      name: 'Елена Волкова',
      avatar: '👩',
      text: 'Пробный урок был бесплатным, и ребёнок сразу попросил записать его на курс. Очень довольны!',
      course: 'Scratch Junior'
    }
  ];

  const faqs = [
    {
      question: 'Какой возраст подходит для обучения?',
      answer: 'Мы принимаем детей от 5 до 16 лет. Для каждой возрастной группы разработаны специальные программы с учётом особенностей восприятия.'
    },
    {
      question: 'Нужен ли опыт программирования?',
      answer: 'Нет, опыт не требуется! Наши курсы разработаны для начинающих. Мы начинаем с самых основ и постепенно усложняем материал.'
    },
    {
      question: 'Как проходят занятия?',
      answer: 'Занятия проходят онлайн в группах до 6 человек или индивидуально. Длительность урока — 60 минут, периодичность — 2 раза в неделю.'
    },
    {
      question: 'Что нужно для занятий?',
      answer: 'Компьютер или ноутбук с доступом в интернет, веб-камера и микрофон. Все программы для обучения бесплатные, мы поможем их установить.'
    },
    {
      question: 'Можно ли попробовать бесплатно?',
      answer: 'Да! Мы предлагаем бесплатный пробный урок, на котором ребёнок познакомится с платформой и преподавателем, а также создаст свой первый проект.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">💻</span>
            <h1 className="text-2xl font-heading font-bold text-foreground">NEXTGENCODE</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            Пробный урок
          </Button>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
              Программирование<br />для детей —<br />это <span className="text-primary">весело!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обучаем детей создавать игры, сайты и приложения.<br />Первый урок — бесплатно! 🎁
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-heading font-semibold">
                Записаться на пробный урок
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 font-heading font-semibold">
                Выбрать курс
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <img 
              src="https://v3.fal.media/files/penguin/Z41al7uax8KYkJZuWsW7j_output.png" 
              alt="Kids coding illustration" 
              className="mx-auto max-w-2xl w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            Наши курсы 🎓
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите направление по возрасту и интересам ребёнка
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <Card 
                key={idx} 
                className="hover:scale-105 transition-transform duration-300 border-2 hover:border-primary cursor-pointer animate-scale-in bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                    {course.icon}
                  </div>
                  <CardTitle className="font-heading text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold text-base">{course.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <p className="text-2xl font-bold text-primary">{course.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            Тарифы 💰
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-secondary transition-all">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Стандарт</CardTitle>
                <CardDescription>Групповые занятия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground mb-2">3 500 ₽</p>
                <p className="text-muted-foreground mb-4">в месяц</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>8 занятий в месяц</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Группа до 6 человек</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Доступ к платформе</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary shadow-xl scale-105 bg-primary/5">
              <CardHeader>
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-2">
                  ПОПУЛЯРНЫЙ
                </div>
                <CardTitle className="font-heading text-2xl">Премиум</CardTitle>
                <CardDescription>Индивидуальные занятия</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-foreground mb-2">6 500 ₽</p>
                <p className="text-muted-foreground mb-4">в месяц</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>8 занятий в месяц</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Индивидуальный подход</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Гибкий график</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Персональная программа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Пробный</CardTitle>
                <CardDescription>Знакомство с платформой</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent mb-2">Бесплатно</p>
                <p className="text-muted-foreground mb-4">первый урок</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>1 занятие 60 минут</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Знакомство с преподавателем</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Первый проект</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            Отзывы родителей 💬
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{testimonial.avatar}</span>
                    <div>
                      <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.course}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            Вопросы и ответы ❓
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-heading text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-foreground">
            Свяжитесь с нами 📞
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Остались вопросы? Заполните форму, и мы вам перезвоним!
          </p>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="ivan@example.com или +7 900 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Расскажите о возрасте ребёнка и интересующем курсе"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">💻</span>
            <h4 className="text-2xl font-heading font-bold">NEXTGENCODE</h4>
          </div>
          <p className="text-white/70 mb-6">Онлайн-школа программирования для детей</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-white/50 text-sm">© 2024 NEXTGENCODE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
