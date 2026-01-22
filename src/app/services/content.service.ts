
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
                    title: 'True Meet Friends',
                    description: 'Bar in Providencia',
                    date: 'Wednesday, Feb 4, 2026 at 7:00 PM',
                    location: 'Providencia',
                    price: { men: '$10,000', women: '$8,000' },
                    imageUrl: '/proximamente.png',
                    imageAlt: 'Social event at a bar',
                    participants: { men: 10, women: 12 },
                    maxParticipants: { men: 15, women: 15 }
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
                    title: 'True Meet Dating',
                    description: 'Bar in Providencia',
                    date: 'Thursday, Feb 5, 2026 at 8:00 PM',
                    location: 'Providencia',
                    price: { men: '$10,000', women: '$8,000' },
                    imageUrl: '/proximamente.png',
                    imageAlt: 'Speed dating event at a bar',
                    participants: { men: 14, women: 11 },
                    maxParticipants: { men: 15, women: 15 }
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
                    title: 'True Meet Amigos',
                    description: 'bar en providencia',
                    date: 'miércoles, 4 de feb. de 2026 a las 19:00',
                    location: 'Providencia',
                    price: { men: '$10.000', women: '$8.000' },
                    imageUrl: '/proximamente.png',
                    imageAlt: 'Evento social en un bar',
                    participants: { men: 10, women: 12 },
                    maxParticipants: { men: 15, women: 15 }
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
                    title: 'True Meet Parejas',
                    description: 'bar en providencia',
                    date: 'jueves, 5 de feb. de 2026 a las 20:00',
                    location: 'Providencia',
                    price: { men: '$10.000', women: '$8.000' },
                    imageUrl: '/proximamente.png',
                    imageAlt: 'Evento de citas rápidas en un bar',
                    participants: { men: 14, women: 11 },
                    maxParticipants: { men: 15, women: 15 }
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
