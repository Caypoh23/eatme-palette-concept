;(() => {
  'use strict'

  const FONTS = [
    {
      key: 'brand',
      name: 'Сейчас',
      note: 'Сейчас: Roboto Flex в заголовках и Suisse Intl в тексте — фирменные шрифты.',
    },
    {
      key: 'sf',
      name: 'iOS · SF Pro',
      note: 'iOS: системный SF Pro. Заголовки — SF Pro Display, текст — SF Pro Text; так выглядят все приложения на iPhone.',
    },
    {
      key: 'inter',
      name: 'Android · Inter',
      note: 'Android: Inter — нейтральный бесплатный шрифт для интерфейсов, близок к системному Roboto, но аккуратнее в кириллице.',
    },
  ]

  const COLORS = [
    { key: 'current', name: 'Сейчас' },
    { key: 'graphite', name: 'Графит' },
  ]

  const SCREENS = [
    ['program', 'Программа · меню дня'],
    ['order', 'Активный заказ'],
    ['delivery-time', 'Время доставки'],
    ['calculator', 'Подбор программы'],
  ]

  const ROLES = [
    ['display', 'Крупный заголовок', 'title', 48, 56, 700],
    ['headline', 'Заголовок', 'title', 36, 40, 700],
    ['titleLarge', 'Заголовок экрана', 'title', 32, 36, 700],
    ['title', 'Заголовок раздела', 'title', 24, 28, 700],
    ['titleSmall', 'Малый заголовок', 'title', 20, 24, 700],
    ['bodyStrong', 'Акцент в тексте', 'title', 18, 24, 700],
    ['currencyLarge', 'Сумма', 'text', 32, 36, 500],
    ['bodyLargeBold', 'Крупный жирный текст', 'text', 20, 24, 700],
    ['button', 'Кнопка', 'text', 18, 24, 500],
    ['body', 'Основной текст', 'text', 16, 24, 400],
    ['bodyMedium', 'Текст средний', 'text', 16, 24, 500],
    ['bodySmall', 'Мелкий текст', 'text', 14, 20, 400],
    ['label', 'Подпись', 'text', 14, 20, 500],
    ['labelStrong', 'Подпись жирная', 'text', 14, 20, 600],
    ['caption', 'Сноска', 'text', 12, 16, 500],
    ['captionRegular', 'Сноска обычная', 'text', 12, 16, 400],
    ['captionSmall', 'Мелкая сноска', 'text', 10, 12, 500],
    ['captionSmallStrong', 'Мелкая сноска жирная', 'text', 10, 12, 600],
    ['captionMicro', 'Микро', 'text', 8, 12, 600],
  ]

  let font = 'sf'
  let color = 'current'
  let compareScreen = SCREENS[0][0]

  function image(fontKey, colorKey, screen) {
    return fontKey === 'brand'
      ? `img/mobile/${colorKey}-${screen}.webp`
      : `img/fonts/${fontKey}-${colorKey}-${screen}.webp`
  }

  function segmented(host, items, current, onPick) {
    host.innerHTML = items
      .map(
        ([key, label]) =>
          `<button type="button" data-key="${key}" aria-pressed="${String(key === current)}">${label}</button>`,
      )
      .join('')
    host.onclick = (event) => {
      const button = event.target.closest('button[data-key]')
      if (button) onPick(button.dataset.key)
    }
  }

  function phone(src, label) {
    return `<figure class="phone-cell"><div class="phone"><div class="phone-screen" tabindex="0" aria-label="${label}"><img src="${src}" alt="${label}" /></div></div><figcaption>${label}</figcaption></figure>`
  }

  function keepScroll(host, render) {
    const tops = [...host.querySelectorAll('.phone-screen')].map((s) => s.scrollTop)
    render()
    host.querySelectorAll('.phone-screen').forEach((screen, index) => {
      const image = screen.querySelector('img')
      const restore = () => {
        screen.scrollTop = tops[index] ?? 0
      }
      if (image.complete) restore()
      else image.addEventListener('load', restore, { once: true })
    })
  }

  function renderPhones() {
    const host = document.getElementById('phones')
    keepScroll(host, () => {
      host.innerHTML = SCREENS.map(([key, label]) =>
        phone(image(font, color, key), label),
      ).join('')
    })
  }

  function renderCompare() {
    const host = document.getElementById('compare')
    keepScroll(host, () => {
      host.innerHTML = FONTS.map((f) =>
        phone(image(f.key, color, compareScreen), f.name),
      ).join('')
    })
    const screens = [...host.querySelectorAll('.phone-screen')]
    let syncing = false
    for (const screen of screens)
      screen.addEventListener('scroll', () => {
        if (syncing) return
        syncing = true
        for (const other of screens)
          if (other !== screen) other.scrollTop = screen.scrollTop
        requestAnimationFrame(() => {
          syncing = false
        })
      })
  }

  function renderRoles() {
    const family = {
      title: ['Roboto Flex', 'SF Pro Display', 'Inter'],
      text: ['Suisse Intl', 'SF Pro Text', 'Inter'],
    }
    const head =
      '<thead><tr><th>Роль</th><th>Размер / строка</th><th>Вес</th><th>Сейчас</th><th>iOS</th><th>Android</th></tr></thead>'
    const rows = ROLES.map(([token, label, kind, size, line, weight]) => {
      const [now, ios, android] = family[kind]
      return `<tr><th>${label}<small>${token}</small></th><td>${size} / ${line}</td><td>${weight}</td><td>${now}</td><td>${ios}</td><td>${android}</td></tr>`
    }).join('')
    document.getElementById('roles').innerHTML = `${head}<tbody>${rows}</tbody>`
  }

  function render() {
    segmented(
      document.getElementById('font-switch'),
      FONTS.map((f) => [f.key, f.name]),
      font,
      (key) => {
        font = key
        render()
      },
    )
    segmented(
      document.getElementById('color-switch'),
      COLORS.map((c) => [c.key, c.name]),
      color,
      (key) => {
        color = key
        render()
      },
    )
    segmented(document.getElementById('screen-switch'), SCREENS, compareScreen, (key) => {
      compareScreen = key
      render()
    })
    document.getElementById('font-note').textContent =
      FONTS.find((f) => f.key === font)?.note ?? ''
    renderPhones()
    renderCompare()
    history.replaceState(null, '', `#font=${font}&color=${color}`)
  }

  const hash = new URLSearchParams(location.hash.slice(1))
  if (FONTS.some((f) => f.key === hash.get('font'))) font = hash.get('font')
  if (COLORS.some((c) => c.key === hash.get('color'))) color = hash.get('color')
  renderRoles()
  render()
})()
