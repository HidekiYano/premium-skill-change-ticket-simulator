const changeSkills = $('#change-skills')

changeSkills.bind('click', event => {
    
    var goldSkillsP = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater', 
                      'Putaway Pitch', 'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher']
    var goldSkillsB = ['Charisma', 'Batting Machine', 'Barrel It Up', '5-Tool Player', 'Ace Specialist', 'Prediction', 
                      'Laser Beam', 'Slugger Instinct', 'Spotlight', 'Master Base Thief']
    var legendSkillsP = ['Control Master', 'Fireballer', "Pitcher's Insight", "Pitcher's Chemistry", 'Slow Starter',
                        'Cooperative Pitching', 'Bullpen Day']
    var legendSkillsB = ['Contact Master', 'Born To Be A Star', "Batter's Insight", "Batter's Chemistry", 'Bad Ball Hitter',
                        'Chance Maker', 'Pioneer']
    var allSkillsP = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater', 'Putaway Pitch',
                     'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher', 'Firefighter', 'Stability', 'Winning Streak', 'Fixer',
                     'Golden Pitcher', 'Pitching Machine', 'Power Pitcher', 'The Setup Man', 'Control Artist', '3-4-5 Specialist', 
                     'Warmed Up', 'Field Commander', 'Calm Mind', 'Danger Zone', 'Fearless', 'Lightning Pitch', 'Righty Specialist',
                     'Breaking Ball Mastery', 'Lefty Specialist', 'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality',
                     'Pick-off King']
    var allSkillsB = ['Charisma', 'Batting Machine', 'Barrel It Up', '5-Tool Player', 'Ace Specialist', 'Prediction', 
                      'Laser Beam', 'Slugger Instinct', 'Spotlight', 'Master Base Thief', 'Training Junkie', 'Full Swing Hitter', 
                      "It Ain't Over Yet", 'Professional', 'Exhaustion', 'Heavy Hitter', 'Endurance', 'Table Setter', 'Reliable', 
                      'Pinpoint Strike', 'Leg Day', 'Flashing The Leather', 'Pinch Hit Specialist', 'Push Hit', 'Hawk Eye', 'RBI Machine',
                      'Head-on', 'Pull Hit', 'Righty Crusher', 'Fastball Crusher', 'Concentration', 'Fielding Specialist', 'Lefty Crusher',
                      'Going For The First Pitch']

    const silverSkillsP = ['Firefighter', 'Stability', 'Winning Streak', 'Fixer', 'Golden Pitcher', 'Pitching Machine', 'Power Pitcher',
                    'The Setup Man', 'Control Artist', '3-4-5 Specialist', 'Warmed Up', 'Field Commander']
    const silverSkillsB = ['Training Junkie', 'Full Swing Hitter', "It Ain't Over Yet", 'Professional', 'Exhaustion', 'Heavy Hitter', 
                           'Endurance', 'Table Setter', 'Reliable', 'Pinpoint Strike', 'Leg Day', 'Flashing The Leather']

    const bronzeSkillsP = ['Calm Mind', 'Danger Zone', 'Fearless', 'Lightning Pitch', 'Righty Specialist', 'Breaking Ball Mastery',
                    'Lefty Specialist', 'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality', 'Pick-off King']
    const bronzeSkillsB = ['Pinch Hit Specialist', 'Push Hit', 'Hawk Eye', 'RBI Machine', 'Head-on', 'Pull Hit', 'Righty Crusher',
                           'Fastball Crusher', 'Concentration', 'Fielding Specialist', 'Lefty Crusher', 'Going For The First Pitch']
    
    const isLegend = $('input[name="is-legend"]:checked').val()
    const playerType = $('input[name="player-type"]:checked').val()

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var skill1 = ''
    var skill2 = ''
    var skill3 = ''
    var level1 = 0
    var level2 = 0
    var level3 = 0

    if(playerType == 'pitcher') {
        if(isLegend == 'yes') {
            if(getRandomInt(5) != 0) {
                skill1 = goldSkillsP[getRandomInt(10)]
            } else {
                skill1 = legendSkillsP[getRandomInt(7)]
            }
            level1 = 3
            level2 = 3
            level3 = 3
        }
    
        if(isLegend == 'no') {
            if(getRandomInt(10) != 0) {
                skill1 = goldSkillsP[getRandomInt(10)]
            } else {
                skill1 = legendSkillsP[getRandomInt(7)]
            }
            level1 = getRandomInt(3) + 1
            level2 = getRandomInt(3) + 1
            level3 = getRandomInt(3) + 1
        }
        
        for(let x = 0; x < allSkillsP.length; x++) {
            if(allSkillsP[x] == skill1) {
                allSkillsP.splice(x, 1)
            }
        }
    
        skill2 = allSkillsP[getRandomInt(allSkillsP.length)]
        
        for(let y = 0; y < allSkillsP.length; y++) {
            if(allSkillsP[y] == skill2) {
                allSkillsP.splice(y, 1)
            }
        }
        
        skill3 = allSkillsP[getRandomInt(allSkillsP.length)]
    } else if(playerType == 'batter') {
        if(isLegend == 'yes') {
            if(getRandomInt(5) != 0) {
                skill1 = goldSkillsB[getRandomInt(10)]
            } else {
                skill1 = legendSkillsB[getRandomInt(7)]
            }
            level1 = 3
            level2 = 3
            level3 = 3
        }
    
        if(isLegend == 'no') {
            if(getRandomInt(10) != 0) {
                skill1 = goldSkillsB[getRandomInt(10)]
            } else {
                skill1 = legendSkillsB[getRandomInt(7)]
            }
            level1 = getRandomInt(3) + 1
            level2 = getRandomInt(3) + 1
            level3 = getRandomInt(3) + 1
        }
        
        for(let x = 0; x < allSkillsB.length; x++) {
            if(allSkillsB[x] == skill1) {
                allSkillsB.splice(x, 1)
            }
        }
    
        skill2 = allSkillsB[getRandomInt(allSkillsB.length)]
        
        for(let y = 0; y < allSkillsB.length; y++) {
            if(allSkillsB[y] == skill2) {
                allSkillsB.splice(y, 1)
            }
        }
        
        skill3 = allSkillsB[getRandomInt(allSkillsB.length)]
    }

    if(isLegend != 'yes' && isLegend != 'no') {
        alert('Select the card type!')
        event.preventDefault()
    } else if(playerType != 'pitcher' && playerType != 'batter') {
        alert('Select the player type!')
        event.preventDefault()
    } else {
        const skillSlot1 = $('#skill-1')
        const skillSlot2 = $('#skill-2')
        const skillSlot3 = $('#skill-3')

        skillSlot1.html('')
        skillSlot2.html('')
        skillSlot3.html('')

        $('#skill-1').attr('class', 'white')
        $('#skill-2').attr('class', 'white')
        $('#skill-3').attr('class', 'white')

        if(playerType == 'pitcher') {
            sleep(500).then(() => {
                if(bronzeSkillsP.includes(skill1)) {
                    $('#skill-1').attr('class', 'bronze')
                } else if(silverSkillsP.includes(skill1)) {
                    $('#skill-1').attr('class', 'silver')
                } else if(goldSkillsP.includes(skill1)) {
                    $('#skill-1').attr('class', 'gold')
                } else {
                    $('#skill-1').attr('class', 'legend')
                }
                skillSlot1.html(skill1 + ' Lv. ' + level1)
            }).then(() => {
                sleep(500).then(() => {
                    if(bronzeSkillsP.includes(skill2)) {
                        $('#skill-2').attr('class', 'bronze')
                    } else if(silverSkillsP.includes(skill2)) {
                        $('#skill-2').attr('class', 'silver')
                    } else if(goldSkillsP.includes(skill2)) {
                        $('#skill-2').attr('class', 'gold')
                    } else {
                        $('#skill-2').attr('class', 'legend')
                    }
                    skillSlot2.html(skill2 + ' Lv. ' + level2)
                }).then(() => {
                    sleep(500).then(() => {
                        if(bronzeSkillsP.includes(skill3)) {
                            $('#skill-3').attr('class', 'bronze')
                        } else if(silverSkillsP.includes(skill3)) {
                            $('#skill-3').attr('class', 'silver')
                        } else if(goldSkillsP.includes(skill3)) {
                            $('#skill-3').attr('class', 'gold')
                        } else {
                            $('#skill-3').attr('class', 'legend')
                        }
                        skillSlot3.html(skill3 + ' Lv. ' + level3)
                    })
                })
            })
        } else if(playerType == 'batter') {
            sleep(500).then(() => {
                if(bronzeSkillsB.includes(skill1)) {
                    $('#skill-1').attr('class', 'bronze')
                } else if(silverSkillsB.includes(skill1)) {
                    $('#skill-1').attr('class', 'silver')
                } else if(goldSkillsB.includes(skill1)) {
                    $('#skill-1').attr('class', 'gold')
                } else {
                    $('#skill-1').attr('class', 'legend')
                }
                skillSlot1.html(skill1 + ' Lv. ' + level1)
            }).then(() => {
                sleep(500).then(() => {
                    if(bronzeSkillsB.includes(skill2)) {
                        $('#skill-2').attr('class', 'bronze')
                    } else if(silverSkillsB.includes(skill2)) {
                        $('#skill-2').attr('class', 'silver')
                    } else if(goldSkillsB.includes(skill2)) {
                        $('#skill-2').attr('class', 'gold')
                    } else {
                        $('#skill-2').attr('class', 'legend')
                    }
                    skillSlot2.html(skill2 + ' Lv. ' + level2)
                }).then(() => {
                    sleep(500).then(() => {
                        if(bronzeSkillsB.includes(skill3)) {
                            $('#skill-3').attr('class', 'bronze')
                        } else if(silverSkillsB.includes(skill3)) {
                            $('#skill-3').attr('class', 'silver')
                        } else if(goldSkillsB.includes(skill3)) {
                            $('#skill-3').attr('class', 'gold')
                        } else {
                            $('#skill-3').attr('class', 'legend')
                        }
                        skillSlot3.html(skill3 + ' Lv. ' + level3)
                    })
                })
            })
        }
    }
    event.preventDefault()
})

