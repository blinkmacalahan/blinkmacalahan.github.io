Prompt: For Android faang level tech screens where I'm asked to build a small app with jetpack compose, what are some expected examples to build. I'm looking to improve my compose skills so I'm more pointedly looking at UI designs to implement 

Response:

For FAANG-level Android interviews (especially onsite or take-home UI rounds), the Compose task is usually **deceptively simple on the surface but designed to test depth**: state management, architecture, performance, and polish—not just “can you draw a screen.”

Here are the **most common UI patterns you should be ready to build in Jetpack Compose**, along with what they’re *really* testing.

---

# 🧩 1. List + Detail (Master/Detail UI)

### Example

* Feed of items → tap → detail screen
* Think: Twitter, Reddit, email inbox

### What you might build

* LazyColumn with items
* Click → navigate to detail
* Load more / pagination
* Pull-to-refresh

### What they’re testing

* `LazyColumn` efficiency
* State hoisting
* Navigation (Compose Navigation or manual)
* Handling loading/error states

👉 Practice idea:

* Build a **GitHub repo browser UI**
* Or a **news feed with expandable cards**

---

# 🔍 2. Search + Filtering UI

### Example

* Search bar filtering a list in real time

### What you might build

* TextField at top
* Filtered list updates as user types
* Optional debounce

### What they’re testing

* State flows (`StateFlow`, `collectAsState`)
* Recomposition efficiency
* Separation of UI vs business logic

👉 Practice idea:

* Contacts list with search + sections (A–Z)
* Product list with filters (chips/toggles)

---

# 🛒 3. Shopping Cart / Selection State

### Example

* Add/remove items, update totals

### What you might build

* List with checkboxes or counters
* Bottom bar showing total price
* Dynamic updates

### What they’re testing

* Derived state (`derivedStateOf`)
* Immutable state patterns
* UI reacting to state changes correctly

👉 Practice idea:

* Food ordering UI
* Cart with quantity stepper (+ / -)

---

# 🧭 4. Multi-Screen Flow (Navigation)

### Example

* Login → Home → Detail
* Or onboarding flow

### What you might build

* Navigation graph
* Passing arguments between screens

### What they’re testing

* Navigation architecture
* ViewModel scoping
* State persistence

👉 Practice idea:

* Simple onboarding flow (3 screens + pager)
* Login form → dashboard

---

# 🧾 5. Form UI + Validation

### Example

* Sign-up form

### What you might build

* TextFields (email, password)
* Validation errors
* Submit button enabled/disabled

### What they’re testing

* State + validation logic separation
* UX polish (error messages, focus handling)
* Keyboard + IME handling

👉 Practice idea:

* Signup screen with live validation
* Payment form (card number formatting)

---

# 🎞️ 6. Animations / UI Polish

### Example

* Expand/collapse card
* Animated visibility
* Transitions

### What you might build

* Expandable list item
* Animated icon toggle

### What they’re testing

* Compose animation APIs
* Thoughtfulness in UX

👉 Practice idea:

* Expandable FAQ list
* Like button with animation

---

# 🧱 7. Custom Layout / Complex UI

### Example

* Pinterest-style grid
* Chat bubbles
* Timeline UI

### What you might build

* Custom composables
* ConstraintLayout or custom `Layout {}`

### What they’re testing

* Deep Compose knowledge
* Layout system understanding

👉 Practice idea:

* Chat screen (left/right bubbles)
* Masonry grid (staggered layout)

---

# 🌐 8. Async Data + Loading States

### Example

* Fetch data and render UI

### What you might build

* Loading spinner
* Error state with retry
* Success UI

### What they’re testing

* Flow/coroutines integration
* Proper UI state modeling (sealed classes)

👉 Practice idea:

* Fake API with delay
* Show loading → success → error

---

# 🎯 What Interviewers REALLY Care About

Even more than the UI itself:

### 1. State management

* Hoisted vs local state
* Single source of truth

### 2. Architecture

* ViewModel + UI separation
* Clean data flow

### 3. Recomposition awareness

* Avoid unnecessary recompositions
* Use `remember`, `key`, etc correctly

### 4. Readability

* Small composables
* Naming clarity

### 5. Edge cases

* Empty states
* Error states
* Rotation (if relevant)

---

# 🧪 High-Value Practice Combos

If you want to level up fast, build these **compound exercises**:

### 🔥 1. “Mini Reddit Client”

* Feed (LazyColumn)
* Upvote toggle
* Expand comments
* Navigation to detail
* Loading + error state

### 🔥 2. “E-commerce UI”

* Product list
* Filters + search
* Cart with totals
* Checkout form

### 🔥 3. “Chat App UI”

* Message list (reverse layout)
* Input box
* Message bubbles
* Typing indicator (optional)

---

# 💡 Pro Tip (This is what separates strong candidates)

Don’t just *build UI*—**talk while building**:

* “I’m hoisting state here because…”
* “This should be a stateless composable…”
* “I’ll model UI state as a sealed class…”

That’s often the difference between mid-level and senior/FAANG-level performance.

---

If you want, I can:

* Give you a **mock interview prompt** and evaluate your approach
* Or design a **7-day focused Compose practice plan tailored to FAANG screens**
