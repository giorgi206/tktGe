import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isOpen = false;
  categories = [
    'მუსიკა/კონცერტი',
    'კინო',
    'რეგიონები',
    'ტრანსპორტი',
    'თეატრი',
    'ოპერა',
    'სპორტი',
    'ზოოპარკი',
    'ფესტივალი'
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCategory(category: string) {
    console.log('Selected:', category);
    this.isOpen = false;
  }

  category = [
    {name: 'მუსიკა' , img: 'https://tkt.ge/static/icons/categories/music-concert.svg'},
    {name: 'კინო' , img: 'https://tkt.ge/static/icons/categories/cinema.svg'},
    {name: 'რკინიგზა' , img: 'https://tkt.ge/static/icons/categories/railway.svg'},
    {name: 'ტრანსპორტი' , img: 'https://tkt.ge/static/icons/categories/transport.svg'},
    {name: 'თეატრი' , img: 'https://tkt.ge/static/icons/categories/theatre.svg'},
    {name: 'ოპერა' , img: 'https://tkt.ge/static/icons/categories/opera.svg'},
    {name: 'სპორტი' , img: 'https://tkt.ge/static/icons/categories/sport.svg'},
    {name: 'ზღვა' , img: 'https://tkt.ge/static/icons/categories/sea.svg'},
    {name: 'ფესტივალი' , img: 'https://tkt.ge/static/icons/categories/festival.svg'},
    {name: 'საბავშვო' , img: 'https://tkt.ge/static/icons/categories/kids.svg'},
    {name: 'კომფერენცია' , img: 'https://tkt.ge/static/icons/categories/conferences.svg'},
    {name: 'სტენდაფი' , img: 'https://tkt.ge/static/icons/categories/standup.svg'},
    {name: 'ტურიზმი' , img: 'https://tkt.ge/static/icons/categories/turism.svg'},
    {name: 'ჰობი' , img: 'https://tkt.ge/static/icons/categories/hobby.svg'},
    {name: 'მასტერკლასი' , img: 'https://tkt.ge/static/icons/categories/masterclass.svg'},
    {name: 'მუზეუმი' , img: 'https://tkt.ge/static/icons/categories/museum.svg'},
    {name: 'საერთაშორისო' , img: 'https://tkt.ge/static/icons/categories/international.svg'},
  ]
}


