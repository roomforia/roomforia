# SKILL: Typography / Подбор шрифтов для Roomforia

## О проекте
Roomforia — AI-платформа для дизайна интерьеров. Сайт: roomforia.com
Стек: Next.js App Router, Tailwind CSS, TypeScript
Шрифты подключаются через `next/font/google` в `src/app/layout.tsx`

## Стиль сайта
- Современный, технологичный, premium
- Цвета: оранжевый `#d66501`, фиолетовый `#855dda`, тёмный `#1E1E1E`, белый `#ffffff`
- Тональность: доверие + инновации + уют (не холодный корпоратив)
- Аудитория: владельцы квартир, дизайнеры, бренды мебели

## Текущий шрифт
```ts
// src/app/layout.tsx
import { Manrope } from "next/font/google"
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})
```
CSS переменная: `--font-manrope`
Применяется в body: `fontFamily: "var(--font-manrope), sans-serif"`

## Как менять шрифт

### 1. Один шрифт (заголовки + текст)
```ts
import { Neue_Montreal } from "next/font/google" // пример

const font = Neue_Montreal({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})
```

### 2. Два шрифта (заголовки отдельно, текст отдельно)
```ts
import { Space_Grotesk, Inter } from "next/font/google"

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const body = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

// В html теге добавить оба: className={`${heading.variable} ${body.variable}`}
// В Tailwind: font-[family-name:var(--font-heading)] для заголовков
```

## Требования к шрифтам
- Обязательно: поддержка кириллицы (`subsets: ["cyrillic"]`)
- Доступен в Google Fonts (next/font/google)
- Читаемый на мобиле при малых размерах (12-14px)
- Выглядит современно при больших размерах (60-80px заголовки)
- Хорошо сочетается с градиентами orange→purple

## Рекомендованные шрифты (проверены на кириллицу)

### Технологичные / геометрические
| Шрифт | Характер | Google Fonts |
|-------|----------|-------------|
| **Geologica** | Современный, геометричный, отлично читается | ✅ кириллица |
| **Unbounded** | Жирный, футуристичный, для заголовков | ✅ кириллица |
| **Space Grotesk** | Технологичный, дружелюбный | ❌ только латиница |
| **Onest** | Чистый, современный, отлично на кириллице | ✅ кириллица |
| **Golos Text** | Российский, читаемый, нейтральный | ✅ кириллица |

### Премиум / editorial
| Шрифт | Характер | Google Fonts |
|-------|----------|-------------|
| **Raleway** | Элегантный, тонкий | ❌ только латиница |
| **Jost** | Геометричный, минималистичный | ❌ только латиница |
| **Syncopate** | Футуристичный, для акцентов | ❌ только латиница |

### Комбинации (заголовок + текст)
- `Geologica` (заголовки) + `Onest` (текст) — технологично + читаемо
- `Unbounded` (заголовки) + `Golos Text` (текст) — контраст веса
- `Onest` везде — чисто, современно, нейтрально

## Файлы для изменения
1. `src/app/layout.tsx` — импорт и подключение шрифта
2. `tailwind.config.ts` — если нужна утилита `font-heading`
3. `src/app/globals.css` — если нужны CSS переменные шрифтов

## Пример итогового layout.tsx
```ts
import { Geologica } from "next/font/google"

const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geologica",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

// В html:
// className={geologica.variable}

// В body style:
// fontFamily: "var(--font-geologica), sans-serif"
```
