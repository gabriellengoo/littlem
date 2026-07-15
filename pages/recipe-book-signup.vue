<template>
  <main class="coming-soon-page">
    <header class="coming-soon-header" aria-label="Recipe book navigation">
      <nuxt-link class="brand" to="/" aria-label="Little Manna home">
        <img src="/images/little-manna-logo-full.png" alt="Little Manna">
      </nuxt-link>
      <nuxt-link class="button button-secondary" to="/">Back home</nuxt-link>
    </header>

    <section class="coming-soon-hero" aria-labelledby="recipe-book-title">
      <div class="coming-soon-media" aria-hidden="true">
        <img src="/images/food1.png" alt="">
      </div>

      <div class="coming-soon-content">
        <p class="eyebrow">Recipe book</p>
        <h1 id="recipe-book-title">The Little Manna recipe book is coming soon.</h1>
        <p class="hero-subtext">
          A mini collection of simple baby and toddler meal ideas for 11 months+ is being prepared for launch on 1 December 2026.
        </p>

        <div class="countdown-grid" aria-label="Countdown to 1 December 2026">
          <article v-for="item in countdownItems" :key="item.label">
            <strong>{{ item.value }}</strong>
            <span>{{ item.label }}</span>
          </article>
        </div>

        <div class="coming-soon-actions">
          <nuxt-link class="button button-primary" to="/#enquire">Enquire for meal prep</nuxt-link>
          <nuxt-link class="button button-secondary" to="/#recipe-book">Back to recipe book</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const COUNTDOWN_TARGET = new Date('2026-12-01T00:00:00+00:00').getTime()

export default {
  data() {
    return {
      now: Date.now(),
      countdownTimer: null
    }
  },
  computed: {
    countdown() {
      const remaining = Math.max(COUNTDOWN_TARGET - this.now, 0)
      const day = 1000 * 60 * 60 * 24
      const hour = 1000 * 60 * 60
      const minute = 1000 * 60

      const days = Math.floor(remaining / day)
      const hours = Math.floor((remaining % day) / hour)
      const minutes = Math.floor((remaining % hour) / minute)
      const seconds = Math.floor((remaining % minute) / 1000)

      return { days, hours, minutes, seconds }
    },
    countdownItems() {
      return [
        { label: 'Days', value: this.formatCountdownValue(this.countdown.days) },
        { label: 'Hours', value: this.formatCountdownValue(this.countdown.hours) },
        { label: 'Minutes', value: this.formatCountdownValue(this.countdown.minutes) },
        { label: 'Seconds', value: this.formatCountdownValue(this.countdown.seconds) }
      ]
    }
  },
  mounted() {
    this.countdownTimer = window.setInterval(() => {
      this.now = Date.now()
    }, 1000)
  },
  beforeDestroy() {
    window.clearInterval(this.countdownTimer)
  },
  methods: {
    formatCountdownValue(value) {
      return String(value).padStart(2, '0')
    }
  }
}
</script>
