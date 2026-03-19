Prompt: Design a 7-day focused Compose practice plan tailored to FAANG screens

Response:

Here’s a **focused 7-day Jetpack Compose plan** designed specifically for FAANG-style interview screens. It’s not about building big apps—it’s about **repeating the exact patterns interviewers test**, with increasing complexity.

Each day is ~1.5–3 hours and deliberately scoped.

---

# 🗓️ Day 1 — Compose Fundamentals (Speed + Cleanliness)

### Goal: Build fast, clean, idiomatic UI

### Build

* Profile screen:

  * Avatar
  * Name + subtitle
  * Stats row (followers, posts, etc.)
  * Button (“Follow”)

### Focus

* `Column`, `Row`, `Box`
* `Modifier` chains (padding, weight, alignment)
* Extracting small composables

### Constraints

* No ViewModel yet
* Everything stateless except button toggle

### Stretch

* Make the button toggle state (Follow ↔ Following)

---

# 🗓️ Day 2 — Lists + State

### Goal: Master `LazyColumn` + state updates

### Build

* Scrollable list of items (e.g., tweets or posts)
* Each item:

  * Title
  * Description
  * Like button (toggle)

### Focus

* `LazyColumn`
* State hoisting
* Immutable list updates

### Constraints

* No navigation yet
* State lives in parent composable

### Stretch

* Add “Load more” button at bottom

---

# 🗓️ Day 3 — Navigation + Multi-Screen

### Goal: Clean screen separation

### Build

* List screen → Detail screen
* Tap item → navigate → show details

### Focus

* Navigation (Compose Navigation or manual)
* Passing arguments
* Screen-level composables

### Constraints

* Introduce a simple ViewModel
* Keep UI stateless

### Stretch

* Add back navigation + state preservation

---

# 🗓️ Day 4 — Async Data + UI State Modeling

### Goal: Handle real-world UI states

### Build

* Fake API call (delay 1–2 seconds)
* Show:

  * Loading spinner
  * Success list
  * Error state with retry

### Focus

* `StateFlow` + `collectAsState`
* Sealed UI state:

  * `Loading`, `Success`, `Error`

### Constraints

* Must separate UI + ViewModel
* No direct mutable state in UI

### Stretch

* Add pull-to-refresh

---

# 🗓️ Day 5 — Forms + Validation

### Goal: Input handling (very common in interviews)

### Build

* Sign-up form:

  * Email
  * Password
  * Confirm password
  * Submit button

### Focus

* TextField state handling
* Validation logic
* Derived state (`isFormValid`)

### Constraints

* Disable button until valid
* Show inline errors

### Stretch

* Add password visibility toggle
* Keyboard actions (Next/Done)

---

# 🗓️ Day 6 — UI Polish + Animations

### Goal: Show senior-level polish

### Build

* Expandable list (e.g., FAQ or messages)
* Tap → expands with animation

### Focus

* `AnimatedVisibility`
* `animateContentSize`
* Subtle transitions

### Constraints

* Keep logic simple
* Focus on UX smoothness

### Stretch

* Animate icon rotation (arrow up/down)

---

# 🗓️ Day 7 — Mock Interview Build (Full Integration)

### Goal: Simulate real interview pressure

### Build (Pick one)

#### Option A: “Mini Reddit Feed”

* Post list
* Upvote toggle
* Expandable content
* Navigation to detail
* Loading state

#### Option B: “E-commerce UI”

* Product list
* Add to cart
* Cart total at bottom
* Simple checkout form

---

### Rules (important)

* Timebox to **90–120 minutes**
* Talk out loud (simulate interview)
* Start with:

  > “I’ll model UI state like this…”

### Focus

* Clean architecture
* State flow clarity
* Composable reuse

---

# 🧠 Daily “Interview Layer” (Do this every day)

After coding, spend 10–15 min answering:

* Where is my state stored?
* What recomposes unnecessarily?
* What would I refactor with more time?
* Is this composable reusable/testable?

---

# 🚀 How to Get Maximum ROI

### 1. Repeat Days 2, 3, and 4

Those are **80% of interview questions**

### 2. Practice explaining while coding

Say things like:

* “This is a stateless composable…”
* “I’m hoisting state to avoid duplication…”
* “This prevents unnecessary recomposition…”

### 3. Keep projects small

Interviewers don’t care about completeness—they care about:

* Decisions
* Tradeoffs
* Clarity

---

# 🎯 If you want next level prep

I can:

* Give you a **realistic FAANG-style prompt + timer**
* Review your solution like an interviewer
* Or give you a **“perfect answer” architecture template** you can reuse during interviews

Just tell me 👍
