<template>
    <div>
    <Car v-on:clickedSomething="handleClickInParent" />
    <!-- or -->
    <Car @clickedSomething="handleClickInParent" />
    </div>
</template>