<template>
  <div>
    <NuxtLayout>
      <h1>{{ $t('title') }}</h1>
      <I18nSwitcher style="margin-bottom: 20px" />
      <div style="display: flex">
        <I18nLink to="/">Index</I18nLink>
        <I18nLink to="/about">About</I18nLink>
        <I18nLink to="/sub">Sub</I18nLink>
        <I18nLink to="/sub/child">Sub child</I18nLink>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
