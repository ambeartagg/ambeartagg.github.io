/*
 1. Make function for onChange event for each filter in <Filters />
    1a. Make function for updating state
    1b. Add function to onChange event for filter
 2. Update to use `if` statement to filter data when a filter element is used
    2a. Make if statement
    2b. Update logic in if statement to filter by this.state.`property` (e.g. this.state.genre)
*/

(() => {
    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                originalData: props.data,
                genre: "",
                year: "",
                search: "",
                sort: ""
            }

            this.updateFormState = this.updateFormState.bind(this);
        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.state.originalData;

            if (this.state.year !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.year === parseInt(this.state.year);
                });
            }
            if (this.state.genre !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.genre === (this.state.genre);
                });
            }

            if (this.state.sort === 'song') {
                filteredData.sort((a, b) => {
                    return a.song.localeCompare(b.song);
                });
            } else if (this.state.sort === 'artist') {
                filteredData.sort((a, b) => {
                    return a.artist.localeCompare(b.artist);
                });
            } else if (this.state.sort === 'genre') {
                filteredData.sort((a, b) => {
                    return a.genre.localeCompare(b.genre);
                });
            } else if (this.state.sort === 'year') {
                filteredData.sort((a, b) => {
                    return a.year - b.year;
                });
            } else if (this.state.sort === 'duration') {
                filteredData.sort((a, b) => {
                    return a.duration.localeCompare(b.duration);
                });
            } else if (this.state.sort === 'rating') {
                filteredData.sort((a, b) => {
                    return a.rating - b.rating;
                });

            }

            if (this.state.search !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.song.includes(this.state.search) || row.artist.includes(this.state.search) || row.genre.includes(this.state.search);
                });
            }



            return (
                <React.Fragment>
                    <Filters
                        updateFormState={this.updateFormState}

                    />

                    <hr />

                    <DataTable data={filteredData} />
                </React.Fragment>
            );
        }
    }


    const Filters = (props) => {
        let updateYear = (clickEvent) => {
            props.updateFormState({
                //The first word before the colon needs to match what is in your this.state in <ReactDataTable />
                year: clickEvent.target.value,
            });
        }
        let updateGenre = (clickEvent) => {
            props.updateFormState({
                //The first word before the colon needs to match what is in your this.state in <ReactDataTable />
                genre: clickEvent.target.value,
            });
        }
        let updateSort = (clickEvent) => {
            props.updateFormState({
                sort: clickEvent.target.value,
            });
        }

        let updateSearch = (Event) => {
            props.updateFormState({
                search: Event.target.value,
            });
        }


        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <b>Year</b>
                        </div>
                        <div className='col-md-4'>
                            <select
                                onChange={updateYear}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='1964'>1964</option>
                                <option value='1966'>1966</option>
                                <option value='1971'>1971</option>
                                <option value='1977'>1977</option>
                                <option value='1978'>1978</option>
                                <option value='1979'>1979</option>
                                <option value='1980'>1980</option>
                                <option value='1981'>1981</option>
                                <option value='1982'>1982</option>
                                <option value='1983'>1983</option>
                                <option value='1984'>1984</option>
                                <option value='1985'>1985</option>
                                <option value='1986'>1986</option>
                                <option value='1987'>1987</option>
                                <option value='1989'>1989</option>
                                <option value='1990'>1990</option>
                                <option value='1991'>1991</option>
                                <option value='1992'>1992</option>
                                <option value='1993'>1993</option>
                                <option value='1994'>1994</option>
                                <option value='1995'>1995</option>
                                <option value='1997'>1997</option>
                                <option value='1998'>1998</option>
                                <option value='1999'>1999</option>
                                <option value='2000'>2000</option>
                                <option value='2003'>2003</option>
                                <option value='2005'>2005</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <b>Genre</b>
                        </div>
                        <div className="col-md-4">
                            <select
                                onChange={updateGenre}
                            >


                                <option value=''>&nbsp;</option>
                                <option value='Hard rock'>Hard rock</option>
                                <option value='Psychedelic rock'>Psychedelic rock</option>
                                <option value='Punk'>Punk</option>
                                <option value='Metal'>Metal</option>
                                <option value='Post-punk'>Post-punk</option>
                                <option value='Gothic rock'>Gothic rock</option>
                                <option value='Ska'>Ska</option>
                                <option value='Garage punk'>Garage punk</option>
                                <option value='New wave'>New wave</option>
                                <option value='Indie rock'>Indie rock</option>
                                <option value='Alternative rock'>Alternative rock</option>
                                <option value='Grunge'>Grunge</option>
                                <option value='Shoegaze'>Shoegaze</option>
                                <option value='Emo'>Emo</option>
                                <option value='Trip hop'>Trip hop</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-2'>
                            <b>Search</b>
                        </div>
                        <div className='col-md-4'>
                            <input 
                            onChange={updateSearch}
                            type='text' />
                        </div>
                        <div className="col-md-2">
                            <b>Row</b>
                        </div>
                        <div className="col-md-4">
                            <select
                                onChange={updateSort}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='song'>Title</option>
                                <option value='artist'>Artist</option>
                                <option value='genre'>Genre</option>
                                <option value='year'>Year</option>
                                <option value='duration'>Duration</option>
                                <option value='rating'>Rating</option>

                            </select>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }


    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <div id="table"><table className="table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Duration</th>
                            <th>Rating</th>
                        </tr>
                        {props.data.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.song}</td>
                                    <td>{row.artist}</td>
                                    <td>{row.genre}</td>
                                    <td>{row.year}</td>
                                    <td>{row.duration}</td>
                                    <td>{row.rating}</td>
                                </tr>
                            );
                        })}

                    </tbody></table></div>
            </div>
        )

    }
    const myData = [
        {
            "song": "You Really Got Me",
            "artist": "The Kinks",
            "genre": "Hard rock",
            "year": 1964,
            "duration": "2:11",
            "rating": 8
        },
        {
            "song": "Sunshine Superman",
            "artist": "Donovan",
            "genre": "Psychedelic rock",
            "year": 1966,
            "duration": "3:15",
            "rating": 6
        },
        {
            "song": "Riders on the Storm",
            "artist": "The Doors",
            "genre": "Psychedelic rock",
            "year": 1971,
            "duration": "7:14",
            "rating": 9
        },
        {
            "song": "Mannequin",
            "artist": "Wire",
            "genre": "Punk",
            "year": 1977,
            "duration": "2:37",
            "rating": 8
        },
        {
            "song": "New Rose",
            "artist": "The Damned",
            "genre": "Punk",
            "year": 1977,
            "duration": "2:42",
            "rating": 7
        },
        {
            "song": "1 2 X U",
            "artist": "Wire",
            "genre": "Punk",
            "year": 1977,
            "duration": "1:57",
            "rating": 7
        },
        {
            "song": "Nervous Breakdown",
            "artist": "Black Flag",
            "genre": "Punk",
            "year": 1978,
            "duration": "2:09",
            "rating": 9
        },
        {
            "song": "Beyond the Realms of Death",
            "artist": "Judas Priest",
            "genre": "Metal",
            "year": 1978,
            "duration": "6:49",
            "rating": 9
        },
        {
            "song": "Damaged Goods",
            "artist": "Gang of Four",
            "genre": "Post-punk",
            "year": 1978,
            "duration": "3:27",
            "rating": 8
        },
        {
            "song": "Foxhole",
            "artist": "Television",
            "genre": "Punk",
            "year": 1978,
            "duration": "4:49",
            "rating": 7
        },
        {
            "song": "I Am a Poseur",
            "artist": "X-Ray Spex",
            "genre": "Punk",
            "year": 1978,
            "duration": "2:33",
            "rating": 8
        },
        {
            "song": "Disorder",
            "artist": "Joy Division",
            "genre": "Post-punk",
            "year": 1979,
            "duration": "3:29",
            "rating": 9
        },
        {
            "song": "Bela Lugosi's Dead",
            "artist": "Bauhaus",
            "genre": "Gothic rock",
            "year": 1979,
            "duration": "9:36",
            "rating": 7
        },
        {
            "song": "She's Lost Control",
            "artist": "Joy Division",
            "genre": "Post-punk",
            "year": 1979,
            "duration": "3:57",
            "rating": 8
        },
        {
            "song": "Shadowplay",
            "artist": "Joy Division",
            "genre": "Post-punk",
            "year": 1979,
            "duration": "3:53",
            "rating": 10
        },
        {
            "song": "New Dawn Fades",
            "artist": "Joy Division",
            "genre": "Post-punk",
            "year": 1979,
            "duration": "4:52",
            "rating": 8
        },
        {
            "song": "Monkey Man",
            "artist": "The Specials",
            "genre": "Ska",
            "year": 1979,
            "duration": "2:46",
            "rating": 7
        },
        {
            "song": "A Forest",
            "artist": "The Cure",
            "genre": "Post-punk",
            "year": 1980,
            "duration": "5:54",
            "rating": 10
        },
        {
            "song": "Let's Lynch the Landlord",
            "artist": "Dead Kennedys",
            "genre": "Punk",
            "year": 1980,
            "duration": "2:13",
            "rating": 8
        },
        {
            "song": "Stigmata Martyr",
            "artist": "Bauhaus",
            "genre": "Gothic rock",
            "year": 1980,
            "duration": "3:41",
            "rating": 8
        },
        {
            "song": "Isolation",
            "artist": "Joy Division",
            "genre": "Gothic rock",
            "year": 1980,
            "duration": "2:55",
            "rating": 7
        },
        {
            "song": "Garbageman",
            "artist": "The Cramps",
            "genre": "Garage punk",
            "year": 1980,
            "duration": "3:37",
            "rating": 8
        },
        {
            "song": "Agent Orange",
            "artist": "Ski Patrol",
            "genre": "Post-punk",
            "year": 1980,
            "duration": "4:19",
            "rating": 8
        },
        {
            "song": "Dreams Never End",
            "artist": "New Order",
            "genre": "New wave",
            "year": 1981,
            "duration": "3:15",
            "rating": 7
        },
        {
            "song": "Arabian Knights",
            "artist": "Siouxsie and the Banshees",
            "genre": "Post-punk",
            "year": 1981,
            "duration": "3:17",
            "rating": 8
        },
        {
            "song": "Spellbound",
            "artist": "Siouxsie and the Banshees",
            "genre": "Gothic rock",
            "year": 1981,
            "duration": "4:13",
            "rating": 8
        },
        {
            "song": "Charlotte Sometimes",
            "artist": "The Cure",
            "genre": "Gothic rock",
            "year": 1981,
            "duration": "3:06",
            "rating": 9
        },
        {
            "song": "Goo Goo Muck",
            "artist": "The Cramps",
            "genre": "Garage punk",
            "year": 1981,
            "duration": "3:06",
            "rating": 8
        },
        {
            "song": "Everything Turns Grey",
            "artist": "Agent Orange",
            "genre": "Punk",
            "year": 1981,
            "duration": "2:00",
            "rating": 9
        },
        {
            "song": "No Way",
            "artist": "Adolescents",
            "genre": "Punk",
            "year": 1981,
            "duration": "2:03",
            "rating": 8
        },
        {
            "song": "Let's Go To Bed",
            "artist": "The Cure",
            "genre": "New wave",
            "year": 1982,
            "duration": "3:34",
            "rating": 8
        },
        {
            "song": "Big Take Over",
            "artist": "Bad Brains",
            "genre": "Punk",
            "year": 1982,
            "duration": "2:57",
            "rating": 6
        },
        {
            "song": "Wonderful Woman",
            "artist": "The Smiths",
            "genre": "Indie rock",
            "year": 1983,
            "duration": "3:10",
            "rating": 7
        },
        {
            "song": "Rainbow in the Dark",
            "artist": "Dio",
            "genre": "Metal",
            "year": 1983,
            "duration": "4:16",
            "rating": 6
        },
        {
            "song": "She's in Parties",
            "artist": "Bauhaus",
            "genre": "Gothic rock",
            "year": 1983,
            "duration": "5:46",
            "rating": 9
        },
        {
            "song": "The Lovecats",
            "artist": "The Cure",
            "genre": "New wave",
            "year": 1983,
            "duration": "3:40",
            "rating": 8
        },
        {
            "song": "Die by the Sword",
            "artist": "Slayer",
            "genre": "Metal",
            "year": 1983,
            "duration": "3:36",
            "rating": 7
        },
        {
            "song": "I Want the One I Can't Have",
            "artist": "The Smiths",
            "genre": "Post-punk",
            "year": 1984,
            "duration": "3:13",
            "rating": 9
        },
        {
            "song": "The Killing Moon",
            "artist": "Echo & The Bunnymen",
            "genre": "Post-punk",
            "year": 1984,
            "duration": "5:48",
            "rating": 8
        },
        {
            "song": "Cities in Dust",
            "artist": "Siouxsie and the Banshees",
            "genre": "Post-punk",
            "year": 1985,
            "duration": "3:51",
            "rating": 8
        },
        {
            "song": "Anything, Anything",
            "artist": "Dramarama",
            "genre": "Alternative rock",
            "year": 1985,
            "duration": "3:26",
            "rating": 8
        },
        {
            "song": "London Dungeon",
            "artist": "Misfits",
            "genre": "Punk",
            "year": 1986,
            "duration": "2:34",
            "rating": 8
        },
        {
            "song": "I Know It's Over",
            "artist": "The Smiths",
            "genre": "Indie rock",
            "year": 1986,
            "duration": "5:49",
            "rating": 7
        },
        {
            "song": "Coward's Way",
            "artist": "Lowlife",
            "genre": "Post-punk",
            "year": 1986,
            "duration": "3:54",
            "rating": 8
        },
        {
            "song": "Sea, Swallow Me",
            "artist": "Cocteau Twins",
            "genre": "Gothic rock",
            "year": 1986,
            "duration": "3:09",
            "rating": 7
        },
        {
            "song": "Lucretia My Reflection",
            "artist": "Sisters of Mercy",
            "genre": "Gothic rock",
            "year": 1987,
            "duration": "4:55",
            "rating": 7
        },
        {
            "song": "About a Girl",
            "artist": "Nirvana",
            "genre": "Grunge",
            "year": 1989,
            "duration": "2:48",
            "rating": 8
        },
        {
            "song": "Gouge Away",
            "artist": "Pixies",
            "genre": "Alternative rock",
            "year": 1989,
            "duration": "2:42",
            "rating": 7
        },
        {
            "song": "Lullaby",
            "artist": "The Cure",
            "genre": "Gothic rock",
            "year": 1989,
            "duration": "4:09",
            "rating": 8
        },
        {
            "song": "Pictures of You",
            "artist": "The Cure",
            "genre": "Gothic rock",
            "year": 1989,
            "duration": "7:28",
            "rating": 9
        },
        {
            "song": "Waiting Room",
            "artist": "Fugazi",
            "genre": "Punk",
            "year": 1989,
            "duration": "2:53",
            "rating": 7
        },
        {
            "song": "Heaven",
            "artist": "Red Lorry Yellow Lorry",
            "genre": "Post-punk",
            "year": 1989,
            "duration": "4:14",
            "rating": 8
        },
        {
            "song": "Here Comes Your Man",
            "artist": "Pixies",
            "genre": "Indie rock",
            "year": 1989,
            "duration": "3:21",
            "rating": 8
        },
        {
            "song": "Is She Weird",
            "artist": "Pixes",
            "genre": "Alternative rock",
            "year": 1990,
            "duration": "3:01",
            "rating": 8
        },
        {
            "song": "Drown",
            "artist": "Strange Boutique",
            "genre": "Gothic rock",
            "year": 1991,
            "duration": "4:38",
            "rating": 8
        },
        {
            "song": "Lithium",
            "artist": "Nirvana",
            "genre": "Grunge",
            "year": 1991,
            "duration": "4:17",
            "rating": 8
        },
        {
            "song": "Echoes In The Well",
            "artist": "Corrosion Of Conformity",
            "genre": "Metal",
            "year": 1991,
            "duration": "5:31",
            "rating": 9
        },
        {
            "song": "Sometimes",
            "artist": "my bloody valentine",
            "genre": "Shoegaze",
            "year": 1991,
            "duration": "5:19",
            "rating": 9
        },
        {
            "song": "Them Bones",
            "artist": "Alice in Chains",
            "genre": "Grunge",
            "year": 1992,
            "duration": "2:29",
            "rating": 10
        },
        {
            "song": "Wake Up",
            "artist": "Rage Against the Machine",
            "genre": "Hard rock",
            "year": 1992,
            "duration": "6:04",
            "rating": 7
        },
        {
            "song": "Pretend We're Dead",
            "artist": "L7",
            "genre": "Grunge",
            "year": 1992,
            "duration": "3:55",
            "rating": 7
        },
        {
            "song": "Alison",
            "artist": "Slowdive",
            "genre": "Shoegaze",
            "year": 1993,
            "duration": "3:50",
            "rating": 7
        },
        {
            "song": "Rotten Apple",
            "artist": "Alice in Chains",
            "genre": "Grunge",
            "year": 1994,
            "duration": "6:58",
            "rating": 9
        },
        {
            "song": "Jet Black",
            "artist": "Jawbreaker",
            "genre": "Emo",
            "year": 1995,
            "duration": "5:13",
            "rating": 7
        },
        {
            "song": "Bullet With Butterfly Wings",
            "artist": "Smashing Pumpkins",
            "genre": "Grunge",
            "year": 1995,
            "duration": "4:18",
            "rating": 9
        },
        {
            "song": "Spiderwebs",
            "artist": "No Doubt",
            "genre": "Ska",
            "year": 1995,
            "duration": "4:27",
            "rating": 8
        },
        {
            "song": "1979",
            "artist": "Smashing Pumpkins",
            "genre": "Alternative rock",
            "year": 1995,
            "duration": "4:26",
            "rating": 9
        },
        {
            "song": "Everlong",
            "artist": "Foo Fighters",
            "genre": "Alternative rock",
            "year": 1997,
            "duration": "4:10",
            "rating": 8
        },
        {
            "song": "Song 2",
            "artist": "Blur",
            "genre": "Alternative rock",
            "year": 1997,
            "duration": "2:01",
            "rating": 7
        },
        {
            "song": "Dissolved Girl",
            "artist": "Massive Attack",
            "genre": "Trip hop",
            "year": 1998,
            "duration": "6:06",
            "rating": 8
        },
        {
            "song": "Honestly?",
            "artist": "American Football",
            "genre": "Emo",
            "year": 1999,
            "duration": "6:10",
            "rating": 7
        },
        {
            "song": "One Step Closer",
            "artist": "Linkin Park",
            "genre": "Metal",
            "year": 2000,
            "duration": "2:37",
            "rating": 7
        },
        {
            "song": "Breaking the Habit",
            "artist": "Linkin Park",
            "genre": "Alternative rock",
            "year": 2003,
            "duration": "3:16",
            "rating": 8
        },
        {
            "song": "Lonely Day",
            "artist": "System of a Down",
            "genre": "Hard rock",
            "year": 2005,
            "duration": "2:47",
            "rating": 7
        }


    ]
        ;

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable data={myData} />);

})();

