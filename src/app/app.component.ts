import { Component, OnInit,ViewEncapsulation, } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon';
import { PokeService } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent implements OnInit {
  //Api variables
  pokemon = {} as Pokemons;
  pokemons: Array<any> = new Array();
  pokemonIDGet : Array<any> = new Array();

  pokemonsarched: number = 0;

  //Pagination Variables
  page = 1;
  count = 0;
  totalitens = 1118;
  itensinpage = 20;

  // Search
  searchString: string = ''

  //Pokemon Images
  pokeID =''

  constructor(private pokeService: PokeService) {}

  ngOnInit() {
    this.getPokemons()
  }
  //Get Api response
  getPokemons() {
    this.pokeService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons.results));
  }

  //Pagination Events
  onTableDataChange(event: any) {
    this.page = event;
    this.getPokemons();
  }

  toggleTheme() {
    const body = document.body as HTMLBodyElement
    const title = document.getElementById('title_text') as HTMLHeadElement
    const information = document.getElementById('item_information') as HTMLDivElement
    const pages = document.getElementById('pages') as HTMLParagraphElement
    const button = document.getElementById('switch-theme') as HTMLInputElement
    const pokebusca = document.getElementById('pokesearch_text') as HTMLParagraphElement
    const content = document.getElementById('textContent') as HTMLDivElement
    const setFirstPage = document.getElementById('setfirstPageIcon') as HTMLElement
    const backpage = document.getElementById('backIcon') as HTMLElement
    const nextpage = document.getElementById('nextIcon') as HTMLElement
    const setLastPage = document.getElementById('setLastPage') as HTMLElement
    const pName = document.getElementsByClassName('pName') as HTMLCollection
    const pDesc = document.getElementsByClassName('pDesc') as HTMLCollection
    const lightDark = document.getElementById('pDarkLight') as HTMLParagraphElement



    if(button.checked){
      body.classList.add("darkmode")
      information.classList.add("darkmode")
      content.classList.add("darkmode")
      pages.classList.add("darkmode")
      title.classList.add("darkmode")
      pokebusca.classList.add("darkmode")
      setFirstPage.setAttribute('style', 'color: #dedede')
      backpage.setAttribute('style', 'color: #dedede')
      nextpage.setAttribute('style', 'color: #dedede')
      setLastPage.setAttribute('style', 'color: #dedede')
      lightDark.innerText="Light"
      lightDark.style.color="#F7F7F7"
      for(let i = 0; i< pName.length; i++) {
        pName[i].classList.add("darkmode")
      }

      for(let i = 0; i< pDesc.length; i++) {
        pDesc[i].classList.add("darkmode")
      }

    } else {
      body.classList.remove("darkmode")
      information.classList.remove("darkmode")
      pages.classList.remove("darkmode")
      title.classList.remove("darkmode")
      pokebusca.classList.remove("darkmode")
      content.classList.remove("darkmode")
      setFirstPage.removeAttribute("style")
      backpage.removeAttribute('style')
      nextpage.removeAttribute('style')
      setLastPage.removeAttribute('style')
      lightDark.innerText="Dark"
      lightDark.style.color="#00000099"

      for(let i = 0; i< pName.length; i++) {
        pName[i].classList.remove("darkmode")
      }

      for(let i = 0; i< pDesc.length; i++) {
        pDesc[i].classList.remove("darkmode")
      }
    }
  }

  title = 'PokeBusca';
}
