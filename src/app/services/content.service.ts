
import { Injectable, signal, computed } from '@angular/core';
import { Language, Content } from '../interfaces/content.interface';

const contentData: Record<Language, Content> = {
    en: {
        title: 'Welcome to',
        upcomingEventsTitle: 'Upcoming Events',
        whatsappUrl: 'https://wa.me/56978566562',
        contactUs: 'Contact Us',
        friends: {
            title: 'Find Friends',
            cta: 'Expand your circle',
            events: [
                {
                    title: 'Connections in Las Condes',
                    description: 'Board games, good food, and great company. A perfect recipe for new friendships.',
                    date: 'Wednesday, Feb 4, 2026 at 7:00 PM',
                    location: 'Las Condes',
                    price: { men: '$18', women: '$15' },
                    imageUrl: '/evt_connections.jpg',
                    imageAlt: 'People playing board games',
                    participants: { men: 10, women: 12 },
                    maxParticipants: { men: 15, women: 15 }
                },
                {
                    title: 'Hiking Club: The Summit',
                    description: 'Join us for a scenic hike and meet other nature lovers. All skill levels welcome!',
                    date: 'Saturday, Feb 7, 2026 at 9:00 AM',
                    location: 'Andes Mountains',
                    price: { men: '$12', women: '$10' },
                    imageUrl: '/evt_hiking.jpg',
                    imageAlt: 'Mountain landscape',
                    participants: { men: 8, women: 14 },
                    maxParticipants: { men: 20, women: 20 }
                },
                {
                    title: 'Cooking Night: Italian Pasta',
                    description: 'Learn to make pasta from scratch and enjoy a delicious dinner with new friends.',
                    date: 'Friday, Feb 13, 2026 at 8:00 PM',
                    location: 'Providencia',
                    price: { men: '$28', women: '$25' },
                    imageUrl: '/evt_cooking.jpg',
                    imageAlt: 'Freshly made pasta',
                    participants: { men: 5, women: 7 },
                    maxParticipants: { men: 10, women: 10 }
                }
            ],
            details: [
                {
                    title: 'WHAT IS TRUE MEET FRIENDS?',
                    description: 'Social events carefully designed to foster natural and spontaneous friendships. Through dynamic group activities and relaxed environments, we create the perfect setting for participants to connect authentically, away from screens and virtual profiles.',
                    imageUrl: '/det_friends_what.jpg',
                    altText: 'A group of friends laughing together'
                },
                {
                    title: 'WHY DOES IT EXIST?',
                    description: 'In the digital age, it can be challenging to meet new people and form genuine friendships. True Meet Friends combats loneliness and the superficiality of social media by offering a space to build real bonds based on shared interests and experiences.',
                    imageUrl: '/det_friends_why.jpg',
                    altText: 'Two friends doing a fun activity outdoors'
                },
                {
                    title: 'EVENT DETAILS',
                    description: "The activity brings together a group of people with similar interests. Through icebreakers and collaborative activities, we facilitate interaction in a no-pressure environment. The goal is for everyone to have fun and find people they connect with. At the end, you'll have the chance to exchange contact information with those you felt a good connection with to continue building that new friendship.",
                    imageUrl: '/det_friends_details.jpg',
                    altText: 'People mingling at a social mixer event'
                }
            ]
        },
        couple: {
            title: 'Find Your Partner',
            cta: 'Start a new story',
            events: [
                {
                    title: 'Gourmet Speed Dating',
                    description: 'A night of fine dining and quick connections. Meet intriguing singles in a chic setting.',
                    date: 'Thursday, Feb 5, 2026 at 8:00 PM',
                    location: 'Vitacura',
                    price: { men: '$35', women: '$30' },
                    imageUrl: '/evt_speed_dating.jpg',
                    imageAlt: 'Fine dining restaurant',
                    participants: { men: 14, women: 11 },
                    maxParticipants: { men: 15, women: 15 }
                },
                {
                    title: 'Wine & Conversation',
                    description: 'Sip exquisite wines and engage in deep conversations. A relaxed way to meet someone special.',
                    date: 'Saturday, Feb 14, 2026 at 7:30 PM',
                    location: 'Casablanca Valley',
                    price: { men: '$45', women: '$40' },
                    imageUrl: '/evt_wine.jpg',
                    imageAlt: 'Glasses of wine',
                    participants: { men: 9, women: 9 },
                    maxParticipants: { men: 12, women: 12 }
                },
                {
                    title: 'Dance Under the Stars',
                    description: 'An enchanting night of music, dancing, and potential romance at a beautiful rooftop bar.',
                    date: 'Friday, Feb 20, 2026 at 9:00 PM',
                    location: 'Bellavista',
                    price: { men: '$25', women: '$20' },
                    imageUrl: '/evt_dance.jpg',
                    imageAlt: 'City skyline at night',
                    participants: { men: 18, women: 20 },
                    maxParticipants: { men: 20, women: 20 }
                }
            ],
            details: [
                {
                    title: 'WHAT IS TRUE MEET DATING?',
                    description: '5-minute speed dating events carefully designed to foster natural and spontaneous interactions. Through dynamic activities and welcoming environments, we create the perfect setting for participants to meet authentically, away from screens and virtual profiles.',
                    imageUrl: '/det_couple_what.jpg',
                    altText: 'A stylish speed dating event in progress'
                },
                {
                    title: 'WHY DOES IT EXIST?',
                    description: 'In the age of dating apps and social media, many feel that virtual connections lack depth and authenticity. The absence of face-to-face contact has led to an emotional disconnect, leaving many searching for more real and meaningful experiences.',
                    imageUrl: '/det_couple_why.jpg',
                    altText: 'A man and a woman talking intimately at a cafe'
                },
                {
                    title: 'EVENT DETAILS',
                    description: "The activity brings together a group of people with an equal distribution of men and women, forming pairs at the start. Each pair will have 5 minutes to get to know each other before rotating, repeating the process until everyone has interacted. At the end, each participant will write down the names of the people they'd like to see again. If there's a match, contact details will be shared so they can arrange a second date independently.",
                    imageUrl: '/det_couple_details.jpg',
                    altText: 'Close-up of people exchanging notes at an event'
                }
            ]
        },
        selection: {
            back: 'Go Back',
            participate: 'Participate'
        },
        participationModal: {
            title: 'Book Your Spot!',
            body: 'To join this event, please send a message to our WhatsApp to complete your registration.',
            cta: 'Chat on WhatsApp',
            close: 'Close'
        },
        eventCard: {
            spotsLeft: 'Only',
            spotsForMen: 'spots left for men',
            spotsForWomen: 'spots for women',
            and: 'and',
            men: 'Men',
            women: 'Women',
        }
    },
    es: {
        title: 'Bienvenido a',
        upcomingEventsTitle: 'Próximos Eventos',
        whatsappUrl: 'https://wa.me/56978566562',
        contactUs: 'Contáctanos',
        friends: {
            title: 'Encuentra Amigos',
            cta: 'Expande tu círculo',
            events: [
                {
                    title: 'Conexiones en Las Condes',
                    description: 'Juegos de mesa, buena comida y excelente compañía. Una receta perfecta para nuevas amistades.',
                    date: 'miércoles, 4 de feb. de 2026 a las 19:00',
                    location: 'Las Condes',
                    price: { men: '$15.000', women: '$12.000' },
                    imageUrl: '/evt_connections.jpg',
                    imageAlt: 'Gente jugando juegos de mesa',
                    participants: { men: 10, women: 12 },
                    maxParticipants: { men: 15, women: 15 }
                },
                {
                    title: 'Club de Senderismo: La Cumbre',
                    description: 'Únete a una caminata escénica y conoce a otros amantes de la naturaleza. ¡Todos los niveles son bienvenidos!',
                    date: 'sábado, 7 de feb. de 2026 a las 9:00',
                    location: 'Cordillera de los Andes',
                    price: { men: '$10.000', women: '$8.000' },
                    imageUrl: '/evt_hiking.jpg',
                    imageAlt: 'Paisaje de montaña',
                    participants: { men: 8, women: 14 },
                    maxParticipants: { men: 20, women: 20 }
                },
                {
                    title: 'Noche de Cocina: Pasta Italiana',
                    description: 'Aprende a hacer pasta desde cero y disfruta de una deliciosa cena con nuevos amigos.',
                    date: 'viernes, 13 de feb. de 2026 a las 20:00',
                    location: 'Providencia',
                    price: { men: '$22.000', women: '$20.000' },
                    imageUrl: '/evt_cooking.jpg',
                    imageAlt: 'Pasta recién hecha',
                    participants: { men: 5, women: 7 },
                    maxParticipants: { men: 10, women: 10 }
                }
            ],
            details: [
                {
                    title: '¿QUÉ ES TRUE MEET AMIGOS?',
                    description: 'Eventos sociales cuidadosamente diseñados para fomentar amistades naturales y espontáneas. A través de actividades grupales dinámicas y ambientes relajados, creamos el escenario perfecto para que los participantes se conozcan de manera auténtica, alejados de las pantallas y perfiles virtuales.',
                    imageUrl: '/det_friends_what.jpg',
                    altText: 'Un grupo de amigos riendo juntos'
                },
                {
                    title: '¿POR QUÉ SURGE?',
                    description: 'En la era digital, puede ser difícil conocer gente nueva y formar amistades genuinas. True Meet Amigos combate la soledad y la superficialidad de las redes sociales, ofreciendo un espacio para crear lazos reales basados en intereses y experiencias compartidas.',
                    imageUrl: '/det_friends_why.jpg',
                    altText: 'Dos amigos realizando una actividad divertida al aire libre'
                },
                {
                    title: 'DETALLES DEL EVENTO',
                    description: 'La actividad consiste en reunir a un grupo de personas con intereses similares. A través de juegos para romper el hielo y actividades colaborativas, facilitamos la interacción en un ambiente sin presiones. El objetivo es que todos se diviertan y encuentren personas con las que conecten. Al final, tendrás la oportunidad de intercambiar contacto con quienes hayas sentido una buena conexión para seguir construyendo esa nueva amistad.',
                    imageUrl: '/det_friends_details.jpg',
                    altText: 'Gente socializando en un evento'
                }
            ]
        },
        couple: {
            title: 'Encuentra tu Pareja',
            cta: 'Comienza una nueva historia',
            events: [
                {
                    title: 'Citas Rápidas Gourmet',
                    description: 'Una noche de alta cocina y conexiones rápidas. Conoce solteros interesantes en un ambiente chic.',
                    date: 'jueves, 5 de feb. de 2026 a las 20:00',
                    location: 'Vitacura',
                    price: { men: '$28.000', women: '$25.000' },
                    imageUrl: '/evt_speed_dating.jpg',
                    imageAlt: 'Restaurante de alta cocina',
                    participants: { men: 14, women: 11 },
                    maxParticipants: { men: 15, women: 15 }
                },
                {
                    title: 'Vino y Conversación',
                    description: 'Degusta vinos exquisitos y participa en conversaciones profundas. Una forma relajada de conocer a alguien especial.',
                    date: 'sábado, 14 de feb. de 2026 a las 19:30',
                    location: 'Valle de Casablanca',
                    price: { men: '$38.000', women: '$35.000' },
                    imageUrl: '/evt_wine.jpg',
                    imageAlt: 'Copas de vino',
                    participants: { men: 9, women: 9 },
                    maxParticipants: { men: 12, women: 12 }
                },
                {
                    title: 'Baila Bajo las Estrellas',
                    description: 'Una noche encantadora de música, baile y posible romance en un hermoso bar en la azotea.',
                    date: 'viernes, 20 de feb. de 2026 a las 21:00',
                    location: 'Bellavista',
                    price: { men: '$20.000', women: '$18.000' },
                    imageUrl: '/evt_dance.jpg',
                    imageAlt: 'Horizonte de la ciudad por la noche',
                    participants: { men: 18, women: 20 },
                    maxParticipants: { men: 20, women: 20 }
                }
            ],
            details: [
                {
                    title: '¿QUÉ ES TRUE MEET PAREJAS?',
                    description: 'Citas rápidas de 5 minutos cuidadosamente diseñados para fomentar interacciones naturales y espontáneas. A través de actividades dinámicas y ambientes acogedores, creamos el escenario perfecto para que los participantes se conozcan de manera auténtica, alejados de las pantallas y perfiles virtuales.',
                    imageUrl: '/det_couple_what.jpg',
                    altText: 'Un evento de citas rápidas en progreso'
                },
                {
                    title: '¿POR QUÉ SURGE?',
                    description: 'En la era de las aplicaciones de citas y las redes sociales, muchas personas sienten que las conexiones virtuales carecen de profundidad y autenticidad. La falta de contacto cara a cara ha generado una desconexión emocional, dejando a muchos en la búsqueda de experiencias más reales y significativas.',
                    imageUrl: '/det_couple_why.jpg',
                    altText: 'Un hombre y una mujer conversando íntimamente en un café'
                },
                {
                    title: 'DETALLES DEL EVENTO',
                    description: 'La actividad consiste en reunir a un grupo de personas con una distribución equitativa de hombres y mujeres, formando parejas al inicio. Cada pareja tendrá 5 minutos para conocerse antes de realizar una rotación, repitiendo el proceso hasta que todos hayan interactuado entre sí. Al finalizar, cada participante anotará en un papel los nombres de las personas con quienes le gustaría seguir conociendo. Si hay coincidencias (match), se les entregarán los datos de contacto de la otra persona para que puedan coordinar una segunda cita de manera independiente.',
                    imageUrl: '/det_couple_details.jpg',
                    altText: 'Primer plano de personas intercambiando notas en un evento'
                }
            ]
        },
        selection: {
            back: 'Volver',
            participate: 'Participar'
        },
        participationModal: {
            title: '¡Reserva tu cupo!',
            body: 'Para participar en este evento, por favor escríbenos a nuestro WhatsApp para completar tu inscripción.',
            cta: 'Escribir por WhatsApp',
            close: 'Cerrar'
        },
        eventCard: {
            spotsLeft: 'Quedan solo',
            spotsForMen: 'cupos para hombres',
            spotsForWomen: 'cupos para mujeres',
            and: 'y',
            men: 'Hombres',
            women: 'Mujeres',
        }
    }
};

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    language = signal<Language>('es');
    showParticipationModal = signal(false);

    content = computed(() => contentData[this.language()]);

    setLanguage(lang: Language): void {
        this.language.set(lang);
    }

    openParticipationModal(): void {
        this.showParticipationModal.set(true);
    }

    closeParticipationModal(): void {
        this.showParticipationModal.set(false);
    }
}
