<template>
    <!-- v-model (2 ways binding data) (v-model modifiers: .lazy, .number, .trim ) -->
    <form @submit.prevent="handleSubmitForm">
        <h2>Text Input</h2>
        <input ref="textInput" v-model="text"> {{ text }}

        <h2>Checkbox</h2>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Checked: {{ checked }}</label>

        <!-- multiple checkboxes can bind to the same array v-model value -->
        <h2>Multi Checkbox</h2>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <p>
            Checked names: <pre>{{ checkedNames }}</pre>
        </p>

        <h2>Radio</h2>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

        <h2>Select</h2>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>

        <h2>Multi Select</h2>
        <select v-model="multiSelected" multiple style="width:100px">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ multiSelected }}</span>
        <div style="margin-top: 50px;">
            <button type="submit">Submit</button>
        </div>
    </form>
</template>

<script setup>
import {  ref } from 'vue'

const textInput = ref('null')
const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])

const handleSubmitForm = () => {
    textInput.value.focus();
    console.log({
        text: text.value,
        checked: checked.value,
        checkedNames: checkedNames.value,
        picked: picked.value,
        selected: selected.value,
        multiSelected: multiSelected.value
    })
}

</script>
