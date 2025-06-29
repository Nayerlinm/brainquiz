import type { TFooterLinks } from '@/models';
import { Mail, Phone } from 'lucide-react';

export const mockEnlacesRapidos: TFooterLinks = [
 { name: 'Inicio', href: '/' },
 { name: 'Encuestas', href: '/' },
 { name: 'Nosotros', href: '/nosotros' },
];

export const mockEnlacesCategorias: TFooterLinks = [
 { name: 'Programación', href: '/' },
 { name: 'Desarrollo Web', href: '/' },
 { name: 'Carrera Profesional', href: '/' },
];

export const mockEnlacesContacto: TFooterLinks = [
 {
  icon: Mail,
  name: 'info@brainquiz.com',
  href: '/',
 },
 {
  icon: Phone,
  name: '0414-1387817 / 0412-7610787',
  href: '/',
 },
];

export const mockEnlacesLegales: TFooterLinks = [
 { name: 'Política de Privacidad', href: '/' },
 { name: 'Términos de Uso', href: '/' },
 { name: 'Política de Cookies', href: '/' },
 { name: 'Accesibilidad', href: '/' },
];
