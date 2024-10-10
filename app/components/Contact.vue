<script setup lang="ts">
import { ref } from 'vue';
import { useGoogleMapData } from "~/composables/useGoogleMapData"
import { useSiteData } from "~/composables/useSiteData"
import { useContactData } from "~/composables/useContactData";

const config = useRuntimeConfig()
const apiKey = config.public.googleMapsApiKey
const apiUrl = config.public.apiUrl
const {
  mapOptions,
  markerOptions
} = useGoogleMapData()
const { contact } = useContactData()
const { getEmailByAccount, address, phone } = useSiteData()
const email = getEmailByAccount('support')

interface formData {
  name: string,
  subject: string,
  email: string,
  message: string,
}

const showSpinner = ref(false);
const showSuccess = ref(false);
const showForm = computed(() => !showSuccess.value && !showSpinner.value);

const getInitialFormData = () => ({
  name: "",
  subject: "",
  email: "",
  message: "",
});

const form: formData = reactive(getInitialFormData());
const resetForm = () => Object.assign(form, getInitialFormData());

const submitForm = async () => {
  showSpinner.value = true
  // validate
  if (!form.name.trim() || !form.email.trim()) {
    showSpinner.value = false
    return;
  }
  try{
    const response = await fetch(`${apiUrl}/contact-form`, {
      method: "POST",
      body: JSON.stringify(form),
    } )
    if (!response.ok){
      //Do something when request fails
      return
    }
    resetForm()
    showSpinner.value = false
    showSuccess.value = true
  } catch (e) {
    console.log(e);
    showSpinner.value = false
  }
}
const clearSuccess = () => {
  resetForm()
  showSuccess.value=false
}
</script>

<template>
  <section id="contact" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
      <div class="text-center w-2/3 mx-auto">
        <h2 class="font-wolves-vs-monster text-4xl leading-relaxed font-bold tracking-tight text-orange-700">{{ contact.title }}</h2>
        <p v-for="content in contact.content" class="mt-3 text-gray-500 dark:text-gray-400" v-html="content"></p>
        <address class="text-orange-700">{{ address.street1 }}, {{ address.city }}, {{ address.state }} {{ address.postal_code }}</address>
      </div>

      <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <span class="inline-block p-3 text-primary-500 rounded-full bg-blue-100/80 dark:bg-gray-800" aria-description="email">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </span>
<!--            <span class="mt-4 text-base font-medium text-gray-800 dark:text-white h-24 align-middle">Email</span>-->
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Summon our team with a spooky email</p>
            <p class="mt-2 text-sm text-primary-500 dark:text-primary-400">{{ email.account }}-dot-{{ email.domain}}</p>
          </div>

          <div>
            <span class="inline-block p-3 text-primary-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
            </span>
<!--            <span class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</span>-->
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Ring our haunted hotline for spine-chilling assistance.</p>
            <p class="mt-2 text-sm text-primary-500 dark:text-primary-400"><NuxtLink :to="'tel:' + phone.raw" external>{{ phone.formatted }}</NuxtLink></p>
          </div>
          <template v-if="showSpinner">
            <div class="space-y-8 h-96 flex items-center justify-center">
              <svg role="status" class="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-primary"
                   viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
              </svg>
            </div>
          </template>
          <template v-if="showForm">
            <form @submit.prevent="submitForm" class="space-y-8">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                <input v-model="form.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Terrified Tim" required>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input v-model="form.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="boo@example.com" required>
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input v-model="form.subject" type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea v-model="form.message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message..."></textarea>
              </div>
              <button @click.prevent="submitForm" type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </template>
          <template v-if="showSuccess">
            <div class="flex min-h-screen items-center justify-center">
              <div class="rounded-lg bg-gray-800 px-16 py-14">
                <div class="flex justify-center">
                  <div class="rounded-full bg-green-200 p-6">
                    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 class="my-4 text-center text-3xl font-semibold text-slate-100">Congratuation!!!</h3>
                <p class="w-[230px] text-center font-normal text-slate-300">Your message have been submitted and will be reviewed shortly.</p>
                <button @click="clearSuccess" class="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-600 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Clear Message</button>
              </div>
            </div>
          </template>
        </div>

        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
          <GoogleMap
              :api-key="apiKey"
              :styles="mapOptions.styles"
              style="width: 100%; height: 100%"
              :center="mapOptions.center"
              :zoom="mapOptions.zoom"
          >
            <CustomMarker :options="markerOptions">
              <div style="text-align: center">
                <div style="font-size: 1.125rem">The Haunted Farm</div>
                <NuxtImg src="/images/logo.svg" width="74" height="108" />
              </div>
              <InfoWindow>
                <div id="content">
                  <div id="siteNotice"></div>
                  <h4>Haunted Farm</h4>
                  <p>Your destination for a frightening night.</p>
                </div>
              </InfoWindow>
            </CustomMarker>
          </GoogleMap>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
