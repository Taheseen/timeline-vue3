<template>
  <div class="item">
    <i class="pi-check-circle">
      <slot></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <label class="duration"><slot name="duration"></slot></label>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.duration {
  display: flex;
  font-size: 0.8rem;
  font-style: italic;
  font-weight: bold;
}
.details {
  flex: 1;
  margin-left: 1rem;
  text-transform: capitalize;
  animation: none;
  padding: 1rem;
  background-color: white;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  animation: highlight 1s forwards;
  color: var(--color-text);
}

@keyframes highlight {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    background-color: #c2185b;
  }
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: #c2185b;
    border-radius: 25px;
    width: 50px;
    height: 50px;
  }

  i:after {
    content: ' ';
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 25px;
    width: 30px;
    height: 30px;
  }
  .item:before {
    content: ' ';
    border-left: 5px solid var(--color-heading);
    position: absolute;
    left: -4px;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 5px solid var(--color-heading);
    position: absolute;
    left: -4px;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
