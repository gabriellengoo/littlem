<template>
  <main>
    <div class="loading-screen" :class="{ 'is-hidden': !isLoading }" aria-hidden="true">
      <img src="/images/little-manna-logo-full.png" alt="">
    </div>

    <div class="floating-shapes" aria-hidden="true">
      <svg class="float-shape float-rainbow-one" viewBox="0 0 220 150">
        <path d="M30 112 C42 56 82 28 124 36 C166 44 188 78 190 124" />
        <path d="M58 116 C66 78 92 58 122 62 C152 66 168 90 170 124" />
        <path d="M86 120 C92 98 106 86 124 88 C142 90 150 104 152 126" />
        <path class="cloud" d="M34 112 C16 116 10 92 28 84 C30 58 66 62 66 86 C88 78 104 104 86 122 C70 138 48 130 34 112 Z" />
      </svg>

      <svg class="float-shape float-rainbow-two" viewBox="0 0 240 160">
        <path d="M36 126 C54 48 116 18 168 46 C210 68 222 104 216 140" />
        <path d="M68 132 C82 78 122 56 160 72 C190 84 200 112 194 142" />
        <path d="M100 136 C110 108 132 98 154 106 C172 114 178 128 174 146" />
        <path class="star" d="M42 42 L48 56 L62 50 L54 64 L68 72 L52 72 L48 88 L42 74 L28 82 L36 66 L22 58 L38 58 Z" />
      </svg>

      <svg class="float-shape float-blob-one" viewBox="0 0 260 230">
        <path d="M52 32 C92 -6 146 18 176 38 C220 66 248 112 224 158 C198 208 126 224 72 198 C24 174 6 108 24 70 C30 56 40 44 52 32 Z" />
      </svg>

      <svg class="float-shape float-blob-two" viewBox="0 0 250 220">
        <path d="M42 74 C64 16 132 10 176 34 C218 58 238 112 214 158 C188 210 112 218 64 190 C20 164 20 116 42 74 Z" />
      </svg>

      <svg class="float-shape float-squiggle-one" viewBox="0 0 180 80">
        <path d="M16 46 C42 18 64 18 90 46 S138 74 164 44" />
      </svg>

      <svg class="float-shape float-squiggle-two" viewBox="0 0 180 80">
        <path d="M18 42 C44 66 68 66 92 42 S136 18 162 44" />
      </svg>

      <svg class="float-shape float-rainbow-three" viewBox="0 0 240 160">
        <path d="M36 126 C54 48 116 18 168 46 C210 68 222 104 216 140" />
        <path d="M68 132 C82 78 122 56 160 72 C190 84 200 112 194 142" />
        <path d="M100 136 C110 108 132 98 154 106 C172 114 178 128 174 146" />
      </svg>

      <svg class="float-shape float-blob-three" viewBox="0 0 260 230">
        <path d="M52 32 C92 -6 146 18 176 38 C220 66 248 112 224 158 C198 208 126 224 72 198 C24 174 6 108 24 70 C30 56 40 44 52 32 Z" />
      </svg>

      <svg class="float-shape float-squiggle-three" viewBox="0 0 180 80">
        <path d="M16 46 C42 18 64 18 90 46 S138 74 164 44" />
      </svg>
    </div>

    <header class="site-header" :class="{ 'is-scrolled': hasScrolledPastHero }" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Little Manna home">
        <img src="/images/little-manna-logo-full.png" alt="Little Manna">
      </a>

      <button class="menu-toggle" type="button" :aria-expanded="isMenuOpen.toString()" aria-controls="site-nav" @click="isMenuOpen = !isMenuOpen">
        <span class="sr-only">Toggle menu</span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-nav" class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isMenuOpen = false">{{ item.label }}</a>
        <a class="nav-cta" href="#enquire" @click="isMenuOpen = false">Enquire</a>
      </nav>
    </header>

    <section id="top" class="video-hero" aria-label="Little Manna hero video">
      <video :src="googleDriveVideoSourceUrl" autoplay muted loop playsinline preload="auto"></video>
      <div id="intro" class="hero hero-overlay">
        <p class="eyebrow">Personal in-home meal prep for little ones 11 months+</p>
        <h1>Homemade meals, made around your baby.</h1>
        <p class="hero-subtext">
          Little Manna is a personal in-home meal prep service for babies and toddlers 11 months+, cooked in your kitchen and tailored to your child's stage, routine, allergies, likes and dislikes.
        </p>
        <div class="button-row">
          <a class="button button-primary" href="#enquire">Enquire for weekly prep</a>
          <a class="button button-secondary" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Book intro call</a>
        </div>
        <p class="founding-note">Currently opening limited founding family spaces.</p>
      </div>
    </section>

    <a class="back-to-top" :class="{ 'is-visible': hasScrolledPastHero }" href="#top" aria-label="Back to top">
      ↑
    </a>

    <section id="different" class="section-shell intro-section">
      <p class="eyebrow">What makes it different</p>
      <h2>Not baby food delivery — personal prep for your little one.</h2>
      <p class="section-lead">Fresh baby food brands make meals for babies. Little Manna makes meals for your baby.</p>
      <div class="minimal-grid">
        <article v-for="card in differenceCards" :key="card.title">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
    </section>

    <section id="how-it-works" class="section-shell">
      <p class="eyebrow">How it works</p>
      <h2>Weekly prep that fits your home rhythm.</h2>
      <div class="steps-list">
        <article v-for="(step, index) in steps" :key="step.title">
          <span>{{ index + 1 }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="packages" class="section-shell">
      <p class="eyebrow">Packages</p>
      <h2>Choose the prep day that suits your week.</h2>
      <div class="package-grid">
        <article v-for="pkg in packages" :key="pkg.name" class="package-card" :class="{ featured: pkg.featured }">
          <p v-if="pkg.featured" class="package-label">Most popular</p>
          <h3>{{ pkg.name }}</h3>
          <p class="package-price">{{ pkg.price }}</p>
          <p class="package-time">{{ pkg.time }}</p>
          <ul>
            <li v-for="item in pkg.items" :key="item">{{ item }}</li>
          </ul>
          <a class="button" :class="pkg.featured ? 'button-primary' : 'button-secondary'" href="#enquire">Enquire</a>
        </article>
      </div>
      <p class="section-note">Groceries are not included. Parents can order ingredients directly or I can create a suggested shopping list.</p>
    </section>

    <section id="meals" class="section-shell meal-section">
      <div class="meal-blob-images" aria-hidden="true">
        <figure class="meal-blob meal-blob-left">
          <img src="/images/food1.png" alt="">
        </figure>
        <figure class="meal-blob meal-blob-right">
          <img src="/images/food3.png" alt="">
        </figure>
      </div>
      <p class="eyebrow">Example meals</p>
      <h2>Simple meals for tiny hands and little mouths.</h2>
      <ul class="meal-list">
        <li v-for="meal in meals" :key="meal">{{ meal }}</li>
      </ul>
      <p class="section-note">Menus are adapted to your child's stage, allergies and parent guidance.</p>
    </section>

    <section id="trust" class="section-shell split-section">
      <div>
        <p class="eyebrow">Safety and trust</p>
        <h2>Gentle, careful and parent-approved.</h2>
        <p class="section-lead">
          Every family starts with an intake form covering allergies, foods already introduced, texture stage, preferences and parent concerns. Meals are clearly labelled with ingredients, allergens, date cooked, storage and reheating notes.
        </p>
        <p class="small-note">Little Manna does not replace medical or nutrition advice. For allergies, medical needs or specialist diets, parents should follow advice from their GP, health visitor or dietitian.</p>
      </div>
      <ul class="trust-list">
        <li v-for="item in trustItems" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section id="about" class="section-shell about-section">
      <img src="/images/little-manna-logo-full.png" alt="" aria-hidden="true">
      <div>
        <p class="eyebrow">About</p>
        <h2>Your little one's cook.</h2>
        <p>
          Hi, I'm Gabrielle. I'm a nanny and creative based in London, and Little Manna came from something I was already doing naturally: making simple homemade food for little ones. After a parent suggested I offer it properly, I started shaping it into a small in-home meal prep service for families who want something more personal than a set menu or delivery box.
        </p>
        <p>
          My approach is warm, practical and child-led — meals are made around the baby in front of me, not a one-size-fits-all menu.
        </p>
      </div>
    </section>

    <section id="recipe-book" class="section-shell recipe-section">
      <p class="eyebrow">Recipe book</p>
      <h2>Want a little taste first?</h2>
      <p>Download the Little Manna mini recipe book: simple baby and toddler meal ideas for 11 months+.</p>
      <a class="button button-primary" href="https://example.com/recipe-book-signup">Get the free recipe book</a>
    </section>

    <section id="faq" class="section-shell">
      <p class="eyebrow">FAQ</p>
      <h2>Questions parents usually ask.</h2>
      <div class="faq-list">
        <details v-for="item in faqs" :key="item.question">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </section>

    <section id="enquire" class="section-shell enquiry-section">
      <div>
        <p class="eyebrow">Enquire</p>
        <h2>Tell me about your little one.</h2>
        <p>Start with a short enquiry, then book a free intro call if you are ready to chat.</p>
        <ol class="flow-list">
          <li>Parent submits short enquiry form.</li>
          <li>Parent can book a free 10–15 min intro call.</li>
          <li>If it feels like a good fit, I send the full Typeform parent intake.</li>
          <li>After intake is complete, I create the menu and grocery list for approval.</li>
          <li>Weekly prep is confirmed once the menu and date are agreed.</li>
        </ol>
      </div>

      <div class="enquiry-panel">
        <form ref="enquiryForm" class="enquiry-form" :action="formspreeEndpoint" method="POST" @submit.prevent="submitEnquiry">
          <div class="form-field">
            <label for="parent-name">Parent name</label>
            <input id="parent-name" type="text" name="parent_name" autocomplete="name" required>
          </div>
          <div class="form-field">
            <label for="parent-email">Email</label>
            <input id="parent-email" type="email" name="email" autocomplete="email" required>
          </div>
          <div class="form-field">
            <label for="child-age">Child's age</label>
            <input id="child-age" type="text" name="child_age" required>
          </div>
          <div class="form-field">
            <label for="location-area">Location / area</label>
            <input id="location-area" type="text" name="location_area" autocomplete="address-level2" required>
          </div>
          <div class="form-field full-span">
            <label for="package-interest">Package interested in</label>
            <select id="package-interest" name="package_interested_in" required>
              <option value="">Select a package</option>
              <option>Mini Prep</option>
              <option>Weekly Little Prep</option>
              <option>Family Prep Day</option>
              <option>Founding family space</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div class="form-field full-span">
            <label for="short-message">Short message</label>
            <textarea id="short-message" name="message" rows="5" required></textarea>
          </div>
          <p
            v-if="formStatus === 'success'"
            id="enquiry-success"
            class="form-status form-status-success full-span"
            role="status"
            tabindex="-1"
            ref="successMessage"
          >
            Thank you for enquiring. I'll review your message and come back to you soon. If you're ready to chat, you can also
            <a :href="bookingUrl" target="_blank" rel="noopener noreferrer">book a free intro call below</a>.
          </p>
          <p v-if="formStatus === 'error'" class="form-status form-status-error full-span" role="alert">
            {{ formError }}
          </p>
          <button class="button button-primary full-span" type="submit" :disabled="formStatus === 'submitting'">
            {{ formStatus === 'submitting' ? 'Sending...' : 'Send enquiry' }}
          </button>
        </form>

        <section class="booking-card" aria-labelledby="booking-title">
          <p class="eyebrow">Intro call</p>
          <h3 id="booking-title">Book a free intro call</h3>
          <p>Before starting weekly prep, we'll have a short 10–15 minute chat about your child's age, eating stage, allergies, routine, likes/dislikes, location and what kind of meal support you need.</p>
          <a class="button button-secondary" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Book an intro call</a>
          <p class="small-note">Booking a call does not confirm a paid prep session. Weekly prep is confirmed after the parent intake, menu agreement and date confirmation.</p>
        </section>

        <section class="intake-card" aria-labelledby="intake-title">
          <h3 id="intake-title">Full parent intake</h3>
          <p>The full parent intake form is for after we've spoken or if I've sent it to you directly. It covers your child's age, eating stage, allergies, routine, likes/dislikes and parent preferences.</p>
          <a :href="typeformIntakeUrl" target="_blank" rel="noopener noreferrer">Open parent intake form</a>
        </section>
      </div>
    </section>

    <footer class="site-footer">
      <a class="brand" href="#top">
        <img src="/images/little-manna-logo-full.png" alt="Little Manna">
      </a>
      <p>Homemade meals, made around your baby.</p>
      <nav aria-label="Footer navigation">
        <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a :href="emailHref">Email</a>
        <a href="#enquire">Enquire</a>
        <a :href="bookingUrl" target="_blank" rel="noopener noreferrer">Book a call</a>
        <a href="#recipe-book">Recipe book</a>
      </nav>
    </footer>
  </main>
</template>

<script>
import {
  BOOKING_URL,
  EMAIL_ADDRESS,
  FORMSPREE_ENDPOINT,
  INSTAGRAM_URL,
  TYPEFORM_INTAKE_URL
} from '~/config/site'

export default {
  data() {
    return {
      isMenuOpen: false,
      isLoading: true,
      hasScrolledPastHero: false,
      formStatus: 'idle',
      formError: '',
      formspreeEndpoint: FORMSPREE_ENDPOINT,
      bookingUrl: BOOKING_URL,
      typeformIntakeUrl: TYPEFORM_INTAKE_URL,
      instagramUrl: INSTAGRAM_URL,
      emailAddress: EMAIL_ADDRESS,
      googleDriveVideoSourceUrl: '/videos/little-manna-hero.mp4',
      navItems: [
        { label: 'Difference', href: '#different' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Packages', href: '#packages' },
        { label: 'Meals', href: '#meals' },
        { label: 'FAQ', href: '#faq' }
      ],
      differenceCards: [
        {
          title: 'Tailored to your baby',
          text: "Menus are planned around age, texture stage, allergies, favourite foods and foods they're learning to like."
        },
        {
          title: 'Cooked in your home',
          text: 'Prepared in your kitchen, with your chosen ingredients, containers and routine.'
        },
        {
          title: 'Nanny-informed',
          text: 'Built from real childcare experience, not just recipe development.'
        },
        {
          title: 'Parent relief',
          text: 'Less planning, less batch-cooking and less mealtime stress every week.'
        }
      ],
      steps: [
        {
          title: 'Tell me about your little one',
          text: 'Age, eating stage, allergies, routine, likes, dislikes and parent goals.'
        },
        {
          title: 'Approve the menu',
          text: 'I create a simple weekly menu and grocery list for you to approve.'
        },
        {
          title: 'I cook in your kitchen',
          text: 'I come to your home, prep the meals, portion everything and label it.'
        },
        {
          title: 'Fridge/freezer ready',
          text: 'You get homemade meals with ingredients, allergens, storage and reheating notes.'
        }
      ],
      packages: [
        {
          name: 'Mini Prep',
          price: '£150 + groceries',
          time: '2–3 hours',
          items: ['6–8 portions', 'Good for trying the service']
        },
        {
          name: 'Weekly Little Prep',
          price: '£300 + groceries',
          time: '4–5 hours',
          featured: true,
          items: ['12–18 portions', '3–5 meal types (frozen food etc)', '1–2 breakfast/snack options (smoothies/juices)', 'Labels + storage notes', 'Light kitchen clean-down']
        },
        {
          name: 'Family Prep Day',
          price: '£450 + groceries',
          time: '6–7 hours',
          items: ['Toddler meals plus simple family sides/meals', 'Good for busier households']
        }
      ],
      meals: [
        'Banana oat pancakes',
        'Soft veggie fritters',
        'Hidden veg pasta sauce',
        'Chicken, sweet potato & pea patties',
        'Salmon rice balls',
        'Mini egg muffins',
        'Lentil coconut stew',
        'Apple cinnamon porridge pots'
      ],
      trustItems: ['Allergy-aware intake', 'Parent-approved menus', 'Clear food labels', 'Fridge/freezer guidance', 'Light kitchen clean-down', 'Food hygiene practices'],
      faqs: [
        {
          question: 'Do you cook in my home?',
          answer: 'Yes. Little Manna is an in-home service. I cook in your kitchen using your preferred ingredients and containers.'
        },
        {
          question: 'Are groceries included?',
          answer: 'No. The weekly price is for planning, cooking, portioning, labelling and light clean-down. Groceries are separate.'
        },
        {
          question: 'Can you cook for allergies?',
          answer: 'I can adapt meals around parent guidance and known allergens, but I do not give medical or dietetic advice. For serious allergies or medical diets, parents should follow professional guidance.'
        },
        {
          question: 'What age is this for?',
          answer: "Babies and toddlers 11 months+. Meals are adapted to the child's eating stage and parent preferences."
        },
        {
          question: 'Do you make purées?',
          answer: 'The focus is 11 months+ meals, soft finger foods and toddler-friendly prep, but texture can be adapted depending on the child.'
        },
        {
          question: 'How many meals do I get?',
          answer: 'The £300 weekly package usually includes around 12–18 portions, depending on the menu and cooking time.'
        },
        {
          question: 'Do you clean up?',
          answer: 'I do a light clean-down of the cooking area, but deep cleaning is not included.'
        }
      ]
    }
  },
  computed: {
    emailHref() {
      return `mailto:${this.emailAddress}`
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    window.setTimeout(() => {
      this.isLoading = false
    }, 900)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.hasScrolledPastHero = window.scrollY > window.innerHeight * 0.72
    },
    async submitEnquiry() {
      this.formStatus = 'submitting'
      this.formError = ''

      try {
        const response = await fetch(this.formspreeEndpoint, {
          method: 'POST',
          body: new FormData(this.$refs.enquiryForm),
          headers: {
            Accept: 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Form submission failed')
        }

        this.formStatus = 'success'
        this.$refs.enquiryForm.reset()
        this.$nextTick(() => {
          if (this.$refs.successMessage) {
            this.$refs.successMessage.focus()
          }
        })
      } catch (error) {
        this.formStatus = 'error'
        this.formError = 'Sorry, the enquiry could not be sent. Please try again or email me directly.'
      }
    }
  }
}
</script>
