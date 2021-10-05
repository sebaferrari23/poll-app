<script>
import pollImg from '../assets/images/polls.svg'
</script>

<main class="flex items-center py-8 bg-white sm:py-16 md:py-20 lg:py-28 xl:py-32">
  <div class="lg:max-w-2xl lg:w-full sm:text-center lg:text-left">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <strong class="text-indigo-600">Create a Poll</strong>
      in Seconds
    </h1>
    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
    </p>
    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div class="rounded-md shadow">
        <a href="/new-poll" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Create a Poll
        </a>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <a href="/polls" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
          Browse Polls
        </a>
      </div>
    </div>
  </div>
  <div>
    <img src={pollImg} alt="">
  </div>
</main>