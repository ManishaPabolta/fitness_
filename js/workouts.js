(function() {
  const sampleWorkouts = [
    // ===== MORNING HIIT =====
    { 
      id: 'hiit-1',
      title: 'Morning HIIT',
      category: 'Cardio',
      level: 'Beginner',
      duration: 20,
      met: 8,
      calories: 220,
      tags: ['trending'],
      target: ['Full body'],
      equipment: 'None',
      warmup: [
        'Jog in place - 2 min',
        'Arm circles - 30 sec each',
        'Leg swings - 10 per leg'
      ],
      main: [
        {
          name: 'Burpees',
          time: '30s x4',
          step: [
            'Stand straight, feet shoulder-width apart',
            'Drop into plank position',
            'Do one push-up',
            'Jump up explosively',
            'Land softly and repeat'
          ],
          image: 'https://uploads.onecompiler.io/44cwzqjd6/44cwzqtvp/jebson-118-min.jpg',
          description: 'Burpees are a full-body exercise that improve strength, endurance, and cardiovascular fitness.'
        },
        {
          name: 'Jump Squats',
          time: '30s x4',
          step: [
            'Stand with feet shoulder-width apart',
            'Squat down, keeping chest up',
            'Explode upwards, jumping as high as possible',
            'Land softly into squat position'
          ],
          image: '../assets/images/jump-squats.jpg',
          description: 'Jump Squats strengthen your legs, glutes, and improve explosive power.'
        },
        {
          name: 'Mountain Climbers',
          time: '30s x4',
          step: [
            'Start in plank position',
            'Drive right knee to chest',
            'Switch legs rapidly, alternating knees',
            'Keep core tight and back flat'
          ],
          image: '../assets/images/mountain-climbers.jpg',
          description: 'Mountain Climbers work your core, shoulders, and improve cardiovascular endurance.'
        },
        {
          name: 'High Knees',
          time: '30s x4',
          step: [
            'Run in place',
            'Lift knees to waist height',
            'Pump arms in rhythm',
            'Maintain fast pace'
          ],
          image: '../assets/images/high-knees.jpg',
          description: 'High Knees increase heart rate, strengthen legs, and improve agility.'
        },
        {
          name: 'Lunge Jumps',
          time: '30s x4',
          step: [
            'Step into lunge with right leg forward',
            'Jump and switch legs mid-air',
            'Land softly in lunge with left leg forward',
            'Repeat continuously'
          ],
          image: '../assets/images/lunge-jumps.jpg',
          description: 'Lunge Jumps target quads, glutes, and improve explosive leg power.'
        }
      ],
      cooldown: [
        'Hamstring stretch - 30 sec per leg',
        'Shoulder stretch - 30 sec',
        'Deep breathing - 1 min'
      ],
      safety: [
        'Keep knees soft on landings',
        'Maintain neutral spine',
        'Avoid overextending knees'
      ],
      demo: '../assets/images/workout-1.svg'
    },

    // ===== FULL BODY STRENGTH =====
    { 
      id: 'strength-1',
      title: 'Full Body Strength',
      category: 'Strength',
      level: 'Intermediate',
      duration: 35,
      met: 6,
      calories: 320,
      tags: ['popular'],
      target: ['Legs', 'Back', 'Core'],
      equipment: 'Dumbbell',
      warmup: [
        'Dynamic lunges - 10 per leg',
        'Band pull-aparts - 15 reps',
        'Scapular retractions - 15 reps'
      ],
      main: [
        {
          name: 'Goblet Squat',
          reps: '3x12',
          step: [
            'Hold a dumbbell close to chest',
            'Feet shoulder-width apart',
            'Lower into squat, keeping chest upright',
            'Push through heels to stand'
          ],
          image: '../assets/images/goblet-squat.jpg',
          description: 'Goblet Squat strengthens quads, glutes, and core while improving posture.'
        },
        {
          name: 'Bent-over Row',
          reps: '3x12',
          step: [
            'Hold dumbbells in each hand',
            'Hinge forward at hips',
            'Pull dumbbells to waist',
            'Lower slowly back down'
          ],
          image: '../assets/images/bent-over-row.jpg',
          description: 'Bent-over Row targets back muscles, biceps, and improves upper body strength.'
        },
        {
          name: 'Dumbbell Shoulder Press',
          reps: '3x10',
          step: [
            'Hold dumbbells at shoulder height',
            'Press overhead until arms fully extended',
            'Lower back to shoulders slowly'
          ],
          image: '../assets/images/shoulder-press.jpg',
          description: 'Shoulder Press builds shoulder strength and improves upper body stability.'
        },
        {
          name: 'Plank',
          time: '3x45s',
          step: [
            'Place elbows on floor, shoulder-width apart',
            'Keep body straight from head to heels',
            'Engage core and glutes',
            'Hold position for the given time'
          ],
          image: '../assets/images/plank.jpg',
          description: 'Plank strengthens core, shoulders, and improves overall stability.'
        },
        {
          name: 'Dumbbell Deadlift',
          reps: '3x10',
          step: [
            'Hold dumbbells in front of thighs',
            'Hinge at hips to lower dumbbells to mid-shin',
            'Keep back straight and knees slightly bent',
            'Return to standing'
          ],
          image: '../assets/images/dumbbell-deadlift.jpg',
          description: 'Deadlifts target hamstrings, glutes, back, and improve posture and strength.'
        }
      ],
      cooldown: [
        'Foam roll quads - 1 min each leg',
        'Chest stretch - 30 sec',
        'Cat-Cow stretch - 1 min'
      ],
      safety: [
        'Use manageable weights',
        'Brace core during lifts',
        'Avoid rounding back'
      ],
      demo: '../assets/images/workout-2.svg'
    },

    // ===== MORNING YOGA =====
    { 
      id: 'yoga-1',
      title: 'Morning Yoga',
      category: 'Yoga',
      level: 'Beginner',
      duration: 30,
      met: 3,
      calories: 120,
      tags: ['new'],
      target: ['Flexibility'],
      equipment: 'Mat',
      warmup: [
        'Breathwork - 2 min',
        'Cat-Cow - 5 rounds'
      ],
      main: [
        {
          name: 'Sun Salutations',
          reps: '5 rounds',
          step: [
            'Start in Mountain Pose',
            'Inhale, arms overhead',
            'Exhale, forward fold',
            'Step or jump back to Plank',
            'Lower down, then upward dog',
            'Exhale, downward dog',
            'Step forward, rise to standing'
          ],
          image: '../assets/images/sun-salutations.jpg',
          description: 'Sun Salutations warm up the body, improve flexibility, and enhance circulation.'
        },
        {
          name: 'Standing Balance',
          reps: '3x30s',
          step: [
            'Stand on left leg',
            'Bring right foot to inner thigh',
            'Hands in prayer position',
            'Hold balance, switch legs'
          ],
          image: '../assets/images/standing-balance.jpg',
          description: 'Standing Balance improves leg strength, focus, and stability.'
        },
        {
          name: 'Warrior II',
          reps: '2x30s per side',
          step: [
            'Step feet wide apart',
            'Turn right foot 90°',
            'Bend right knee, extend arms out',
            'Gaze over front hand, hold, switch sides'
          ],
          image: '../assets/images/warrior-ii.jpg',
          description: 'Warrior II strengthens legs, opens hips, and improves endurance.'
        },
        {
          name: 'Seated Forward Fold',
          reps: '1x1 min',
          step: [
            'Sit with legs extended',
            'Inhale, raise arms',
            'Exhale, fold forward reaching for toes',
            'Relax neck and shoulders'
          ],
          image: '../assets/images/seated-forward-fold.jpg',
          description: 'Seated Forward Fold stretches hamstrings and spine, promoting relaxation.'
        },
        {
          name: 'Savasana',
          reps: '1x5 min',
          step: [
            'Lie on back, legs extended',
            'Arms relaxed by sides',
            'Close eyes, breathe deeply',
            'Relax whole body'
          ],
          image: '../assets/images/savasana.jpg',
          description: 'Savasana calms the mind, relieves stress, and helps the body recover.'
        }
      ],
      cooldown: [
        'Child pose - 1 min',
        'Neck stretches - 30 sec each side',
        'Deep breathing - 2 min'
      ],
      safety: [
        'Avoid poses if experiencing acute pain',
        'Move gently and listen to your body'
      ],
      demo: '../assets/images/workout-3.svg'
    },

    // ===== FULL CARDIO BLAST =====
   {
    id: 'cardio-1',
    title: 'Full Cardio Blast 30-Exercise Routine',
    category: 'Cardio',
    level: 'Intermediate',
    duration: 60, // minutes
    met: 8,
    calories: 600,
    tags: ['stamina', 'fat burn', 'endurance'],
    target: ['Full body', 'Heart', 'Lungs'],
    equipment: 'None',
    warmup: [
      'Jog in place - 3 min',
      'Arm circles - 30 sec each',
      'Leg swings - 15 per leg',
      'Torso twists - 30 sec',
      'High knees - 2 min'
    ],
    main: [
      // 1
      {
        name: 'Burpees',
        time: '30s x4',
        step: [
          'Stand straight, feet shoulder-width apart',
          'Drop into plank position',
          'Do one push-up',
          'Jump up explosively',
          'Land softly and repeat'
        ],
        image: '../assets/images/burpees.jpg',
        description: 'Full-body exercise improving strength, endurance, and cardiovascular fitness.'
      },
      // 2
      {
        name: 'Jump Squats',
        time: '30s x4',
        step: [
          'Stand feet shoulder-width apart',
          'Squat down, keeping chest up',
          'Explode upwards, jump as high as possible',
          'Land softly into squat'
        ],
        image: '../assets/images/jump-squats.jpg',
        description: 'Strengthens legs, glutes, and improves explosive power.'
      },
      // 3
      {
        name: 'Mountain Climbers',
        time: '30s x4',
        step: [
          'Start in plank position',
          'Drive right knee to chest',
          'Switch legs rapidly',
          'Keep core tight'
        ],
        image: '../assets/images/mountain-climbers.jpg',
        description: 'Works core, shoulders, and improves cardio endurance.'
      },
      // 4
      {
        name: 'High Knees',
        time: '30s x4',
        step: [
          'Run in place',
          'Lift knees to waist height',
          'Pump arms quickly',
          'Maintain fast pace'
        ],
        image: '../assets/images/high-knees.jpg',
        description: 'Increases heart rate, strengthens legs, and improves agility.'
      },
      // 5
      {
        name: 'Lunge Jumps',
        time: '30s x4',
        step: [
          'Step into lunge with right leg forward',
          'Jump and switch legs mid-air',
          'Land softly and repeat'
        ],
        image: '../assets/images/lunge-jumps.jpg',
        description: 'Targets quads, glutes, and builds explosive leg power.'
      },
      // 6
      {
        name: 'Push-up with Shoulder Tap',
        time: '30s x4',
        step: [
          'Perform a push-up',
          'Tap left shoulder with right hand',
          'Tap right shoulder with left hand',
          'Keep core tight'
        ],
        image: '../assets/images/pushup-shoulder-tap.jpg',
        description: 'Strengthens chest, shoulders, triceps and core simultaneously.'
      },
      // 7
      {
        name: 'Plank Jacks',
        time: '30s x4',
        step: [
          'Start in plank position',
          'Jump feet apart and together like jumping jacks',
          'Maintain stable upper body'
        ],
        image: '../assets/images/plank-jacks.jpg',
        description: 'Core and cardio exercise improving heart rate and stability.'
      },
      // 8
      {
        name: 'Butt Kicks',
        time: '30s x4',
        step: [
          'Run in place, kicking heels toward glutes',
          'Keep core engaged',
          'Maintain quick pace'
        ],
        image: '../assets/images/butt-kicks.jpg',
        description: 'Warms up hamstrings and boosts cardiovascular endurance.'
      },
      // 9
      {
        name: 'Skater Jumps',
        time: '30s x4',
        step: [
          'Jump sideways landing on one leg',
          'Swing opposite leg behind and arms across body',
          'Alternate sides continuously'
        ],
        image: '../assets/images/skater-jumps.jpg',
        description: 'Improves lateral power, balance, and leg strength.'
      },
      // 10
      {
        name: 'Tuck Jumps',
        time: '30s x4',
        step: [
          'Stand with feet shoulder-width apart',
          'Jump explosively bringing knees to chest',
          'Land softly with knees slightly bent'
        ],
        image: '../assets/images/tuck-jumps.jpg',
        description: 'Explosive cardio exercise targeting legs and core.'
      },
      // 11
      {
        name: 'Jumping Jacks',
        time: '1 min x3',
        step: [
          'Stand straight, feet together, arms at sides',
          'Jump feet apart while raising arms overhead',
          'Return to starting position',
          'Repeat continuously'
        ],
        image: '../assets/images/jumping-jacks.jpg',
        description: 'Classic cardio move to increase heart rate and full-body coordination.'
      },
      // 12
      {
        name: 'Jump Rope',
        time: '2 min',
        step: [
          'Jump continuously using rope',
          'Keep elbows close to body',
          'Maintain consistent pace'
        ],
        image: '../assets/images/jump-rope.jpg',
        description: 'Classic cardio exercise boosting stamina and coordination.'
      },
      // 13
      {
        name: 'Side-to-Side Hops',
        time: '30s x4',
        step: [
          'Jump side to side over imaginary line',
          'Land softly with knees bent',
          'Maintain quick pace'
        ],
        image: '../assets/images/side-to-side-hops.jpg',
        description: 'Improves agility, coordination, and leg strength.'
      },
      // 14
      {
        name: 'Lateral Shuffles',
        time: '30s x4',
        step: [
          'Stay low in athletic stance',
          'Shuffle sideways quickly for 10 steps',
          'Switch direction'
        ],
        image: '../assets/images/lateral-shuffles.jpg',
        description: 'Enhances lateral movement, agility, and heart rate.'
      },
      // 15
      {
        name: 'Bear Crawl',
        time: '30s x3',
        step: [
          'Start on hands and knees',
          'Lift knees slightly off floor',
          'Move forward keeping core tight'
        ],
        image: '../assets/images/bear-crawl.jpg',
        description: 'Total body conditioning improving strength and coordination.'
      },
      // 16
      {
        name: 'Plank Shoulder Tap',
        time: '30s x3',
        step: [
          'Start in plank position',
          'Tap right shoulder with left hand, left shoulder with right hand',
          'Keep hips stable'
        ],
        image: '../assets/images/plank-shoulder-tap.jpg',
        description: 'Engages core and shoulders, improves stability.'
      },
      // 17
      {
        name: 'Reverse Lunge Knee Drive',
        time: '30s x3',
        step: [
          'Step back into lunge',
          'Drive knee up explosively',
          'Switch legs continuously'
        ],
        image: '../assets/images/reverse-lunge-knee-drive.jpg',
        description: 'Leg and core strength with cardio component.'
      },
      // 18
      {
        name: 'Flutter Kicks',
        time: '30s x3',
        step: [
          'Lie on back, hands under glutes',
          'Lift legs slightly off floor',
          'Kick legs alternately quickly'
        ],
        image: '../assets/images/flutter-kicks.jpg',
        description: 'Strengthens lower abs and hip flexors.'
      },
      // 19
      {
        name: 'Russian Twists',
        reps: '3x20',
        step: [
          'Sit on mat, knees bent',
          'Lean back slightly, lift feet off floor',
          'Twist torso side to side, touching floor'
        ],
        image: '../assets/images/russian-twist.jpg',
        description: 'Targets obliques and core rotational strength.'
      },
      // 20
      {
        name: 'Burpee Broad Jump',
        reps: '3x10',
        step: [
          'Perform burpee',
          'Jump forward as far as possible',
          'Land softly, reset and repeat'
        ],
        image: '../assets/images/burpee-broad-jump.jpg',
        description: 'Combines explosive power, cardio, and full-body strength.'
      },
      // 21
      {
        name: 'Side Plank Hip Dip',
        time: '30s each side x3',
        step: [
          'Start in side plank on forearm',
          'Lower hips toward floor slowly',
          'Lift back to starting position'
        ],
        image: '../assets/images/side-plank-hip-dip.jpg',
        description: 'Strengthens obliques, shoulders, and core.'
      },
      // 22
      {
        name: 'Spider-Man Plank',
        time: '30s x3',
        step: [
          'Start in plank',
          'Bring right knee toward right elbow',
          'Return and switch legs continuously'
        ],
        image: '../assets/images/spiderman-plank.jpg',
        description: 'Engages core, obliques, and hip flexors.'
      },
      // 23
      {
        name: 'Jumping Lunges',
        time: '30s x3',
        step: [
          'Lunge forward with right leg',
          'Jump and switch legs mid-air',
          'Land softly in lunge'
        ],
        image: '../assets/images/jumping-lunges.jpg',
        description: 'Builds leg strength, balance, and explosive power.'
      },
      // 24
      {
        name: 'Plyometric Push-ups',
        reps: '3x10',
        step: [
          'Perform push-up explosively pushing off floor',
          'Land softly and repeat',
          'Keep core tight'
        ],
        image: '../assets/images/plyo-pushup.jpg',
        description: 'Develops upper body power and chest strength.'
      },
      // 25
      {
        name: 'Star Jumps',
        time: '30s x3',
        step: [
          'Jump explosively, arms and legs out like a star',
          'Land softly, repeat'
        ],
        image: '../assets/images/star-jumps.jpg',
        description: 'Full-body plyometric move boosting cardio and explosive power.'
      },
      // 26
      {
        name: 'Inchworm Walkout',
        reps: '3x10',
        step: [
          'Stand straight, hinge at hips, walk hands forward into plank',
          'Perform a push-up, walk hands back, stand up'
        ],
        image: '../assets/images/inchworm.jpg',
        description: 'Combines flexibility, core, and strength.'
      },
      // 27
      {
        name: 'Squat to Calf Raise',
        reps: '3x15',
        step: [
          'Perform a squat',
          'Rise onto toes at top of squat',
          'Lower back down and repeat'
        ],
        image: '../assets/images/squat-calf-raise.jpg',
        description: 'Works legs, calves, and balance.'
      },
      // 28
      {
        name: 'Side-to-Side Skater Hop',
        time: '30s x3',
        step: [
          'Jump sideways landing on one foot',
          'Swing arms for momentum',
          'Alternate sides continuously'
        ],
        image: '../assets/images/side-skater-hop.jpg',
        description: 'Boosts lateral agility, balance, and cardio.'
      },
      // 29
      {
        name: 'Box Jumps',
        reps: '3x12',
        step: [
          'Jump onto stable box or platform',
          'Land softly with knees slightly bent',
          'Step down and repeat'
        ],
        image: '../assets/images/box-jumps.jpg',
        description: 'Explosive power and cardio, targets legs and glutes.'
      },
      // 30
      {
        name: 'Mountain Climber Twist',
        time: '30s x3',
        step: [
          'Start in plank position',
          'Bring right knee toward left elbow',
          'Alternate quickly, keeping core tight'
        ],
        image: '../assets/images/mountain-climber-twist.jpg',
        description: 'Advanced cardio move engaging core, obliques, and legs.'
      }
    ],
    cooldown: [
      'Slow jog - 2 min',
      'Hamstring stretch - 30 sec each leg',
      'Quad stretch - 30 sec each leg',
      'Shoulder stretch - 30 sec each side',
      'Child pose - 1 min',
      'Deep breathing - 2 min'
    ],
    safety: [
      'Keep movements controlled where possible',
      'Land softly on jumps',
      'Engage core throughout',
      'Take breaks if heart rate too high',
      'Maintain neutral spine'
    ],
    demo: 'https://uploads.onecompiler.io/44cwzqjd6/44e67pd4e/images%20(4).jpg'
  },
    {
    id: 'strength-1',
    title: 'Ultimate 30-Exercise Strength Routine',
    category: 'Strength',
    level: 'Advanced',
    duration: 75, // minutes
    met: 6,
    calories: 700,
    tags: ['strength', 'muscle growth', 'toning'],
    target: ['Full body', 'Arms', 'Legs', 'Core', 'Back', 'Chest'],
    equipment: 'Dumbbells / Resistance bands / Bodyweight',
    warmup: [
      'Arm circles - 30 sec each',
      'Hip circles - 10 each direction',
      'Leg swings - 15 per leg',
      'Bodyweight squats - 15 reps',
      'Light jogging in place - 3 min'
    ],
    main: [
      // 1
      {
        name: 'Goblet Squat',
        reps: '3x12',
        step: [
          'Hold a dumbbell close to chest',
          'Feet shoulder-width apart',
          'Lower into squat keeping chest upright',
          'Push through heels to stand'
        ],
        image: '../assets/images/goblet-squat.jpg',
        description: 'Strengthens quads, glutes, and core while improving posture.'
      },
      // 2
      {
        name: 'Dumbbell Deadlift',
        reps: '3x12',
        step: [
          'Hold dumbbells in front of thighs',
          'Hinge at hips to lower dumbbells to mid-shin',
          'Keep back straight and knees slightly bent',
          'Return to standing'
        ],
        image: '../assets/images/dumbbell-deadlift.jpg',
        description: 'Targets hamstrings, glutes, back, and improves posture.'
      },
      // 3
      {
        name: 'Dumbbell Bench Press',
        reps: '3x12',
        step: [
          'Lie on bench, dumbbells in hands',
          'Lower dumbbells to chest',
          'Press back up to starting position'
        ],
        image: '../assets/images/dumbbell-bench-press.jpg',
        description: 'Builds chest, shoulders, and triceps.'
      },
      // 4
      {
        name: 'Bent-over Row',
        reps: '3x12',
        step: [
          'Hold dumbbells in each hand',
          'Hinge forward at hips',
          'Pull dumbbells to waist',
          'Lower slowly back down'
        ],
        image: '../assets/images/bent-over-row.jpg',
        description: 'Targets back muscles, biceps, and improves posture.'
      },
      // 5
      {
        name: 'Shoulder Press',
        reps: '3x12',
        step: [
          'Hold dumbbells at shoulder height',
          'Press overhead until arms fully extended',
          'Lower slowly back to shoulders'
        ],
        image: '../assets/images/shoulder-press.jpg',
        description: 'Builds shoulder strength and stability.'
      },
      // 6
      {
        name: 'Bicep Curl',
        reps: '3x15',
        step: [
          'Hold dumbbells at sides',
          'Curl weights up to shoulders',
          'Lower slowly'
        ],
        image: '../assets/images/bicep-curl.jpg',
        description: 'Strengthens biceps and improves arm definition.'
      },
      // 7
      {
        name: 'Tricep Kickback',
        reps: '3x15',
        step: [
          'Hold dumbbells, hinge at hips',
          'Bend elbows 90°',
          'Extend arms back, squeeze triceps',
          'Return to start'
        ],
        image: '../assets/images/tricep-kickback.jpg',
        description: 'Strengthens triceps and tones arms.'
      },
      // 8
      {
        name: 'Lateral Raise',
        reps: '3x12',
        step: [
          'Hold dumbbells at sides',
          'Lift arms to shoulder height',
          'Lower slowly back down'
        ],
        image: '../assets/images/lateral-raise.jpg',
        description: 'Targets shoulders and improves deltoid definition.'
      },
      // 9
      {
        name: 'Front Raise',
        reps: '3x12',
        step: [
          'Hold dumbbells in front of thighs',
          'Lift straight up to shoulder height',
          'Lower slowly'
        ],
        image: '../assets/images/front-raise.jpg',
        description: 'Strengthens front shoulders and upper chest.'
      },
      // 10
      {
        name: 'Arnold Press',
        reps: '3x12',
        step: [
          'Start with dumbbells in front of shoulders, palms facing body',
          'Rotate wrists outward while pressing up',
          'Lower and rotate back'
        ],
        image: '../assets/images/arnold-press.jpg',
        description: 'Builds shoulders with rotational movement for full deltoid activation.'
      },
      // 11
      {
        name: 'Dumbbell Step-up',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbells at sides',
          'Step onto bench with right foot',
          'Push through heel to stand',
          'Step down and switch legs'
        ],
        image: '../assets/images/step-up.jpg',
        description: 'Strengthens quads, glutes, and improves balance.'
      },
      // 12
      {
        name: 'Dumbbell Walking Lunge',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbells at sides',
          'Step forward into lunge',
          'Push off front leg to step forward with other leg',
          'Continue alternating'
        ],
        image: '../assets/images/walking-lunge.jpg',
        description: 'Builds lower body strength, glutes, and core stability.'
      },
      // 13
      {
        name: 'Dumbbell Romanian Deadlift',
        reps: '3x12',
        step: [
          'Hold dumbbells in front of thighs',
          'Hinge at hips, keep back straight',
          'Lower to mid-shin, then return'
        ],
        image: '../assets/images/romanian-deadlift.jpg',
        description: 'Targets hamstrings, glutes, and lower back.'
      },
      // 14
      {
        name: 'Calf Raise',
        reps: '3x20',
        step: [
          'Stand on edge of step',
          'Raise heels as high as possible',
          'Lower slowly below step level'
        ],
        image: '../assets/images/calf-raise.jpg',
        description: 'Strengthens calves and improves ankle stability.'
      },
      // 15
      {
        name: 'Chest Fly',
        reps: '3x12',
        step: [
          'Lie on bench with dumbbells',
          'Arms extended above chest',
          'Lower arms wide, keep elbows slightly bent',
          'Return to top'
        ],
        image: '../assets/images/chest-fly.jpg',
        description: 'Targets chest muscles and shoulder mobility.'
      },
      // 16
      {
        name: 'Incline Dumbbell Press',
        reps: '3x12',
        step: [
          'Lie on incline bench, dumbbells in hands',
          'Press dumbbells up',
          'Lower slowly'
        ],
        image: '../assets/images/incline-press.jpg',
        description: 'Upper chest development and shoulder strength.'
      },
      // 17
      {
        name: 'Renegade Row',
        reps: '3x12 each side',
        step: [
          'Start in plank with dumbbells in hands',
          'Row right dumbbell toward chest',
          'Lower and switch sides'
        ],
        image: '../assets/images/renegade-row.jpg',
        description: 'Strengthens back, core, and stabilizing muscles.'
      },
      // 18
      {
        name: 'Dumbbell Thruster',
        reps: '3x12',
        step: [
          'Hold dumbbells at shoulders',
          'Squat down, then press overhead while standing up',
          'Lower back to shoulders and repeat'
        ],
        image: '../assets/images/dumbbell-thruster.jpg',
        description: 'Full-body strength, legs, shoulders, and core activation.'
      },
      // 19
      {
        name: 'Weighted Glute Bridge',
        reps: '3x15',
        step: [
          'Lie on back, dumbbell on hips',
          'Feet flat, lift hips to ceiling',
          'Lower slowly and repeat'
        ],
        image: '../assets/images/glute-bridge.jpg',
        description: 'Targets glutes, hamstrings, and lower back.'
      },
      // 20
      {
        name: 'Russian Twist with Dumbbell',
        reps: '3x20',
        step: [
          'Sit on floor, knees bent',
          'Hold dumbbell, twist side to side',
          'Keep core engaged'
        ],
        image: '../assets/images/russian-twist-dumbbell.jpg',
        description: 'Obliques and rotational core strength.'
      },
      // 21
      {
        name: 'Overhead Tricep Extension',
        reps: '3x15',
        step: [
          'Hold dumbbell with both hands overhead',
          'Lower behind head',
          'Extend back up slowly'
        ],
        image: '../assets/images/tricep-extension.jpg',
        description: 'Tricep isolation for strength and tone.'
      },
      // 22
      {
        name: 'Hammer Curl',
        reps: '3x15',
        step: [
          'Hold dumbbells with palms facing body',
          'Curl dumbbells to shoulders',
          'Lower slowly'
        ],
        image: '../assets/images/hammer-curl.jpg',
        description: 'Biceps and forearm development.'
      },
      // 23
      {
        name: 'Front Squat',
        reps: '3x12',
        step: [
          'Hold dumbbells at shoulders',
          'Squat down keeping chest upright',
          'Push through heels to stand'
        ],
        image: '../assets/images/front-squat.jpg',
        description: 'Quads, glutes, and core activation.'
      },
      // 24
      {
        name: 'Sumo Deadlift',
        reps: '3x12',
        step: [
          'Wide stance, dumbbell between feet',
          'Hinge at hips, lift dumbbell',
          'Lower slowly'
        ],
        image: '../assets/images/sumo-deadlift.jpg',
        description: 'Targets inner thighs, glutes, and lower back.'
      },
      // 25
      {
        name: 'Side Plank with Dumbbell Lift',
        reps: '3x12 each side',
        step: [
          'Side plank on forearm, hold dumbbell',
          'Lift dumbbell towards ceiling',
          'Lower slowly'
        ],
        image: '../assets/images/side-plank-dumbbell.jpg',
        description: 'Obliques, shoulders, and core stability.'
      },
      // 26
      {
        name: 'Single Leg Romanian Deadlift',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbell in opposite hand of standing leg',
          'Hinge forward lifting other leg behind',
          'Return to standing'
        ],
        image: '../assets/images/single-leg-rdl.jpg',
        description: 'Balance, hamstrings, glutes, and core activation.'
      },
      // 27
      {
        name: 'Renegade Curl Press',
        reps: '3x12 each side',
        step: [
          'In plank, perform row then press dumbbell overhead',
          'Alternate sides'
        ],
        image: '../assets/images/renegade-curl-press.jpg',
        description: 'Full upper body strength with core engagement.'
      },
      // 28
      {
        name: 'Dumbbell Side Lunge',
        reps: '3x12 each side',
        step: [
          'Step to side, push hips back, hold dumbbells',
          'Return to center, switch side'
        ],
        image: '../assets/images/side-lunge.jpg',
        description: 'Strengthens legs, glutes, and inner thighs.'
      },
      // 29
      {
        name: 'Weighted Sit-ups',
        reps: '3x15',
        step: [
          'Hold dumbbell on chest',
          'Perform sit-up slowly',
          'Lower back down'
        ],
        image: '../assets/images/weighted-situp.jpg',
        description: 'Abs strength and core endurance.'
      },
      // 30
      {
        name: 'Farmer’s Carry',
        time: '2 min',
        step: [
          'Hold dumbbells at sides',
          'Walk straight maintaining posture',
          'Engage core throughout'
        ],
        image: '../assets/images/farmers-carry.jpg',
        description: 'Grip strength, core stability, and total body conditioning.'
      }
    ],
    cooldown: [
      'Hamstring stretch - 30 sec each leg',
      'Quad stretch - 30 sec each leg',
      'Chest stretch - 30 sec',
      'Shoulder stretch - 30 sec each side',
      'Cat-Cow stretch - 1 min',
      'Deep breathing - 1 min'
    ],
    safety: [
      'Use manageable weights',
      'Engage core during lifts',
      'Maintain neutral spine',
      'Avoid jerky movements',
      'Breathe consistently'
    ],
    demo: '../assets/images/strength-30.svg'
  },

  {
    id: 'flexibility-1',
    title: '30-Exercise Flexibility & Stretching Routine',
    category: 'Flexibility',
    level: 'Beginner/Intermediate',
    duration: 60, // minutes
    met: 2.5,
    calories: 150,
    tags: ['flexibility', 'stretching', 'mobility'],
    target: ['Full body', 'Muscles', 'Joints'],
    equipment: 'Mat / Optional strap',
    warmup: [
      'Neck rolls - 10 each direction',
      'Shoulder rolls - 10 forward & backward',
      'Torso twists - 10 per side',
      'Hip circles - 10 each direction',
      'Gentle march in place - 2 min'
    ],
    main: [
      // 1
      {
        name: 'Standing Forward Bend',
        reps: '2x30s',
        step: [
          'Stand with feet hip-width apart',
          'Hinge at hips and fold forward',
          'Relax neck and shoulders',
          'Breathe deeply'
        ],
        image: '../assets/images/standing-forward-bend.jpg',
        description: 'Stretches hamstrings, lower back, and calves.'
      },
      // 2
      {
        name: 'Cat-Cow Stretch',
        reps: '5 rounds',
        step: [
          'Start on hands and knees',
          'Arch back (Cat) and lift head & tailbone (Cow)',
          'Move slowly with breath'
        ],
        image: '../assets/images/cat-cow.jpg',
        description: 'Improves spinal flexibility and posture.'
      },
      // 3
      {
        name: 'Child’s Pose',
        reps: '2x1 min',
        step: [
          'Kneel on mat, sit on heels',
          'Stretch arms forward, forehead to floor',
          'Relax and breathe'
        ],
        image: '../assets/images/childs-pose.jpg',
        description: 'Lengthens back muscles, relieves tension.'
      },
      // 4
      {
        name: 'Seated Forward Fold',
        reps: '2x1 min',
        step: [
          'Sit with legs extended',
          'Reach forward to toes',
          'Relax shoulders and neck'
        ],
        image: '../assets/images/seated-forward-fold.jpg',
        description: 'Stretches hamstrings and spine.'
      },
      // 5
      {
        name: 'Butterfly Stretch',
        reps: '2x45s',
        step: [
          'Sit with soles of feet together',
          'Hold feet and gently press knees down',
          'Breathe deeply'
        ],
        image: '../assets/images/butterfly-stretch.jpg',
        description: 'Opens hips and groin muscles.'
      },
      // 6
      {
        name: 'Standing Side Stretch',
        reps: '2x30s each side',
        step: [
          'Stand tall, feet hip-width apart',
          'Raise right arm overhead, lean left',
          'Switch sides'
        ],
        image: '../assets/images/standing-side-stretch.jpg',
        description: 'Stretches obliques and intercostal muscles.'
      },
      // 7
      {
        name: 'Triceps Stretch',
        reps: '2x30s each arm',
        step: [
          'Raise right arm overhead, bend elbow behind head',
          'Use left hand to gently press elbow',
          'Switch arms'
        ],
        image: '../assets/images/triceps-stretch.jpg',
        description: 'Stretches triceps and shoulders.'
      },
      // 8
      {
        name: 'Chest Opener Stretch',
        reps: '2x30s',
        step: [
          'Clasp hands behind back',
          'Open chest and lift arms slightly',
          'Keep spine neutral'
        ],
        image: '../assets/images/chest-opener.jpg',
        description: 'Opens chest and front shoulders.'
      },
      // 9
      {
        name: 'Shoulder Stretch Across Body',
        reps: '2x30s each side',
        step: [
          'Bring right arm across chest',
          'Use left hand to pull gently',
          'Switch sides'
        ],
        image: '../assets/images/shoulder-stretch.jpg',
        description: 'Stretches posterior shoulder muscles.'
      },
      // 10
      {
        name: 'Standing Quad Stretch',
        reps: '2x30s each leg',
        step: [
          'Stand tall, pull right foot toward glutes',
          'Keep knees together',
          'Switch legs'
        ],
        image: '../assets/images/standing-quad-stretch.jpg',
        description: 'Stretches quadriceps and hip flexors.'
      },
      // 11
      {
        name: 'Lunge Hip Flexor Stretch',
        reps: '2x30s each side',
        step: [
          'Step right foot forward into lunge',
          'Lower back knee to floor',
          'Press hips forward gently'
        ],
        image: '../assets/images/hip-flexor-stretch.jpg',
        description: 'Opens hip flexors and thighs.'
      },
      // 12
      {
        name: 'Figure Four Stretch',
        reps: '2x30s each side',
        step: [
          'Lie on back, cross right ankle over left thigh',
          'Pull left thigh toward chest',
          'Switch sides'
        ],
        image: '../assets/images/figure-four.jpg',
        description: 'Stretches glutes and piriformis.'
      },
      // 13
      {
        name: 'Seated Spinal Twist',
        reps: '2x30s each side',
        step: [
          'Sit with legs extended',
          'Bend right knee over left',
          'Twist torso to right, place left elbow outside knee'
        ],
        image: '../assets/images/seated-twist.jpg',
        description: 'Improves spinal rotation and flexibility.'
      },
      // 14
      {
        name: 'Standing Hamstring Stretch',
        reps: '2x30s each leg',
        step: [
          'Place right heel on elevated surface',
          'Hinge forward at hips',
          'Switch legs'
        ],
        image: '../assets/images/hamstring-stretch.jpg',
        description: 'Targets hamstrings and calves.'
      },
      // 15
      {
        name: 'Side Lunge Stretch',
        reps: '2x30s each side',
        step: [
          'Step right foot out, bend right knee, keep left leg straight',
          'Switch sides'
        ],
        image: '../assets/images/side-lunge-stretch.jpg',
        description: 'Stretches inner thighs and hips.'
      },
      // 16
      {
        name: 'Calf Stretch on Wall',
        reps: '2x30s each leg',
        step: [
          'Place hands on wall',
          'Step right leg back, heel down',
          'Switch sides'
        ],
        image: '../assets/images/calf-stretch.jpg',
        description: 'Stretches calves and Achilles tendon.'
      },
      // 17
      {
        name: 'Neck Side Stretch',
        reps: '2x30s each side',
        step: [
          'Tilt right ear toward right shoulder',
          'Use right hand gently to deepen stretch',
          'Switch sides'
        ],
        image: '../assets/images/neck-side-stretch.jpg',
        description: 'Releases tension in neck muscles.'
      },
      // 18
      {
        name: 'Wrist Stretch',
        reps: '2x30s each hand',
        step: [
          'Extend arm, fingers up',
          'Pull fingers gently back with opposite hand',
          'Switch hands'
        ],
        image: '../assets/images/wrist-stretch.jpg',
        description: 'Improves wrist flexibility and relieves tension.'
      },
      // 19
      {
        name: 'Ankle Circles',
        reps: '10 each direction per ankle',
        step: [
          'Lift one foot slightly',
          'Rotate ankle clockwise and counterclockwise',
          'Switch foot'
        ],
        image: '../assets/images/ankle-circles.jpg',
        description: 'Enhances ankle mobility.'
      },
      // 20
      {
        name: 'Standing Side Bend',
        reps: '2x30s each side',
        step: [
          'Stand tall, feet hip-width apart',
          'Raise right arm overhead, lean left',
          'Switch sides'
        ],
        image: '../assets/images/standing-side-bend.jpg',
        description: 'Stretches lateral torso and obliques.'
      },
      // 21
      {
        name: 'Knee to Chest Stretch',
        reps: '2x30s each leg',
        step: [
          'Lie on back, pull right knee to chest',
          'Switch legs'
        ],
        image: '../assets/images/knee-to-chest.jpg',
        description: 'Releases lower back and glute muscles.'
      },
      // 22
      {
        name: 'Hip Circles',
        reps: '10 each direction',
        step: [
          'Stand with hands on hips',
          'Rotate hips clockwise and counterclockwise'
        ],
        image: '../assets/images/hip-circles.jpg',
        description: 'Improves hip mobility and core activation.'
      },
      // 23
      {
        name: 'Standing Cat Stretch',
        reps: '2x30s',
        step: [
          'Place hands on thighs',
          'Round spine forward, tuck chin',
          'Arch back gently, repeat'
        ],
        image: '../assets/images/standing-cat.jpg',
        description: 'Spinal mobility and posture alignment.'
      },
      // 24
      {
        name: 'Shoulder Shrugs',
        reps: '2x20',
        step: [
          'Lift shoulders up toward ears',
          'Hold 2s and release',
          'Repeat'
        ],
        image: '../assets/images/shoulder-shrugs.jpg',
        description: 'Relieves shoulder tension and improves mobility.'
      },
      // 25
      {
        name: 'Seated Side Stretch',
        reps: '2x30s each side',
        step: [
          'Sit cross-legged',
          'Reach right arm overhead, lean left',
          'Switch sides'
        ],
        image: '../assets/images/seated-side-stretch.jpg',
        description: 'Stretches obliques and side torso.'
      },
      // 26
      {
        name: 'Figure Four Seated Stretch',
        reps: '2x30s each side',
        step: [
          'Sit, cross right ankle over left thigh',
          'Lean forward gently',
          'Switch sides'
        ],
        image: '../assets/images/figure-four-seated.jpg',
        description: 'Glutes and hip stretch for mobility.'
      },
      // 27
      {
        name: 'Spinal Roll Down',
        reps: '5 reps',
        step: [
          'Stand tall, hinge forward slowly',
          'Roll down vertebra by vertebra',
          'Roll back up to stand'
        ],
        image: '../assets/images/spinal-roll.jpg',
        description: 'Increases spinal flexibility and posture control.'
      },
      // 28
      {
        name: 'Side Reclining Stretch',
        reps: '2x30s each side',
        step: [
          'Lie on side, extend top arm overhead',
          'Stretch gently along floor',
          'Switch sides'
        ],
        image: '../assets/images/side-reclining.jpg',
        description: 'Lateral stretch improving spine and oblique mobility.'
      },
      // 29
      {
        name: 'Hip Flexor Couch Stretch',
        reps: '2x30s each side',
        step: [
          'Place back knee on floor, front leg bent',
          'Lean hips forward gently',
          'Switch sides'
        ],
        image: '../assets/images/couch-stretch.jpg',
        description: 'Opens hip flexors and quads.'
      },
      // 30
      {
        name: 'Savasana / Relaxation Pose',
        reps: '1x5 min',
        step: [
          'Lie on back, arms at sides',
          'Close eyes and breathe deeply',
          'Relax whole body'
        ],
        image: '../assets/images/savasana.jpg',
        description: 'Final relaxation to recover muscles and calm the mind.'
      }
    ],
    cooldown: [
      'Deep breathing - 2 min',
      'Gentle neck stretches - 30 sec each side',
      'Shoulder rolls - 10 reps',
      'Leg shakes - 30 sec each',
      'Slow wrist & ankle rotations - 30 sec each'
    ],
    safety: [
      'Avoid overstretching',
      'Move gently and slowly',
      'Breathe consistently',
      'Stop if feeling sharp pain'
    ],
    demo: '../assets/images/flexibility-30.svg'
  },

  {
    id: 'balance-1',
    title: '30-Exercise Balance & Stability Routine',
    category: 'Balance & Stability',
    level: 'Beginner/Intermediate',
    duration: 60, // minutes
    met: 3.5,
    calories: 200,
    tags: ['balance', 'stability', 'core strength'],
    target: ['Full body', 'Core', 'Legs', 'Back', 'Arms'],
    equipment: 'Mat / Balance ball / Dumbbells (optional)',
    warmup: [
      'March in place - 2 min',
      'Arm circles - 30 sec forward & backward',
      'Hip circles - 10 each direction',
      'Leg swings - 10 per leg',
      'Torso twists - 10 each side'
    ],
    main: [
      // 1
      {
        name: 'Single-Leg Stand',
        reps: '3x30s each leg',
        step: [
          'Stand tall on right leg',
          'Lift left leg slightly',
          'Engage core and maintain balance',
          'Switch legs'
        ],
        image: '../assets/images/single-leg-stand.jpg',
        description: 'Improves ankle stability, core activation, and balance.'
      },
      // 2
      {
        name: 'Heel-to-Toe Walk',
        reps: '3x10 steps forward and backward',
        step: [
          'Walk forward placing heel directly in front of toes',
          'Keep posture upright',
          'Walk backward carefully'
        ],
        image: '../assets/images/heel-to-toe-walk.jpg',
        description: 'Enhances balance, coordination, and foot stability.'
      },
      // 3
      {
        name: 'Tree Pose (Yoga)',
        reps: '3x30s each leg',
        step: [
          'Stand on left leg, place right foot on inner left thigh',
          'Hands in prayer position overhead',
          'Hold balance, switch legs'
        ],
        image: '../assets/images/tree-pose.jpg',
        description: 'Leg strength, core engagement, and balance improvement.'
      },
      // 4
      {
        name: 'Side Leg Raise',
        reps: '3x12 each leg',
        step: [
          'Stand tall, lift right leg sideways',
          'Keep torso stable',
          'Lower slowly, switch sides'
        ],
        image: '../assets/images/side-leg-raise.jpg',
        description: 'Strengthens hip abductors and enhances lateral balance.'
      },
      // 5
      {
        name: 'Single-Leg Deadlift',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbells (optional)',
          'Stand on right leg, hinge forward lifting left leg back',
          'Return to standing, switch legs'
        ],
        image: '../assets/images/single-leg-deadlift.jpg',
        description: 'Strengthens hamstrings, glutes, and challenges balance.'
      },
      // 6
      {
        name: 'Bird Dog',
        reps: '3x12 each side',
        step: [
          'Start on hands and knees',
          'Extend right arm and left leg straight',
          'Hold briefly, return, switch sides'
        ],
        image: '../assets/images/bird-dog.jpg',
        description: 'Core stability, back strength, and balance coordination.'
      },
      // 7
      {
        name: 'Plank with Arm Lift',
        reps: '3x10 each arm',
        step: [
          'Hold plank on hands',
          'Lift right arm forward, hold 2s',
          'Lower and switch arms'
        ],
        image: '../assets/images/plank-arm-lift.jpg',
        description: 'Core stabilization and shoulder control.'
      },
      // 8
      {
        name: 'Plank with Leg Lift',
        reps: '3x10 each leg',
        step: [
          'Hold plank',
          'Lift right leg slightly, hold 2s',
          'Lower and switch legs'
        ],
        image: '../assets/images/plank-leg-lift.jpg',
        description: 'Improves core stability and leg control.'
      },
      // 9
      {
        name: 'Balance Ball Squat',
        reps: '3x12',
        step: [
          'Stand with back against wall, balance ball behind back',
          'Lower into squat, push through heels to stand'
        ],
        image: '../assets/images/ball-squat.jpg',
        description: 'Strengthens legs while challenging stability.'
      },
      // 10
      {
        name: 'Lunges with Reach',
        reps: '3x12 each leg',
        step: [
          'Step forward into lunge',
          'Reach both arms overhead',
          'Return and switch legs'
        ],
        image: '../assets/images/lunge-reach.jpg',
        description: 'Leg strength, balance, and core activation.'
      },
      // 11
      {
        name: 'Side Plank',
        reps: '3x30s each side',
        step: [
          'Lie on side, elbow under shoulder',
          'Lift hips, align body',
          'Hold and switch sides'
        ],
        image: '../assets/images/side-plank.jpg',
        description: 'Obliques and lateral stability.'
      },
      // 12
      {
        name: 'Heel Raises on One Leg',
        reps: '3x15 each leg',
        step: [
          'Stand on right leg',
          'Raise heel as high as possible',
          'Lower slowly, switch legs'
        ],
        image: '../assets/images/heel-raise.jpg',
        description: 'Improves ankle strength and balance.'
      },
      // 13
      {
        name: 'Clock Reach',
        reps: '3x5 each leg',
        step: [
          'Stand on right leg',
          'Reach left leg forward, sideways, back',
          'Switch legs'
        ],
        image: '../assets/images/clock-reach.jpg',
        description: 'Dynamic single-leg balance and control.'
      },
      // 14
      {
        name: 'Single-Leg Hop',
        reps: '3x10 each leg',
        step: [
          'Hop gently on one leg',
          'Land softly, maintain balance',
          'Switch legs'
        ],
        image: '../assets/images/single-leg-hop.jpg',
        description: 'Improves balance, proprioception, and lower leg strength.'
      },
      // 15
      {
        name: 'Walking Lunges with Pause',
        reps: '3x12 each leg',
        step: [
          'Step forward into lunge',
          'Pause at bottom 2s, return to standing',
          'Switch legs'
        ],
        image: '../assets/images/walking-lunge-pause.jpg',
        description: 'Strengthens legs and challenges stability.'
      },
      // 16
      {
        name: 'Hip Abduction with Band',
        reps: '3x15 each leg',
        step: [
          'Attach resistance band above knees',
          'Step sideways maintaining tension',
          'Switch sides'
        ],
        image: '../assets/images/hip-abduction.jpg',
        description: 'Strengthens glutes and lateral stability.'
      },
      // 17
      {
        name: 'Standing Oblique Crunch',
        reps: '3x12 each side',
        step: [
          'Stand tall, hands behind head',
          'Lift right knee toward right elbow',
          'Switch sides'
        ],
        image: '../assets/images/oblique-crunch.jpg',
        description: 'Improves core strength and lateral balance.'
      },
      // 18
      {
        name: 'T-Push-Up',
        reps: '3x10 each side',
        step: [
          'Perform push-up',
          'Rotate body, lift one arm to ceiling forming T',
          'Return and alternate sides'
        ],
        image: '../assets/images/t-pushup.jpg',
        description: 'Strengthens upper body and balance through rotation.'
      },
      // 19
      {
        name: 'Stability Ball Rollout',
        reps: '3x12',
        step: [
          'Kneel on mat, hands on ball',
          'Roll ball forward, keeping back straight',
          'Return to start'
        ],
        image: '../assets/images/ball-rollout.jpg',
        description: 'Core and shoulder stability.'
      },
      // 20
      {
        name: 'Single-Leg Romanian Deadlift',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbell opposite hand of standing leg',
          'Hinge forward lifting back leg',
          'Return to standing, switch legs'
        ],
        image: '../assets/images/single-leg-rdl.jpg',
        description: 'Strengthens hamstrings and challenges balance.'
      },
      // 21
      {
        name: 'Warrior III Pose (Yoga)',
        reps: '3x30s each leg',
        step: [
          'Stand on right leg, torso parallel to floor',
          'Extend left leg back, arms forward',
          'Hold and switch legs'
        ],
        image: '../assets/images/warrior-iii.jpg',
        description: 'Balance, hamstrings, and core stability.'
      },
      // 22
      {
        name: 'Side Step with Balance Pause',
        reps: '3x10 steps each side',
        step: [
          'Step sideways',
          'Pause 2s on each step maintaining balance',
          'Return'
        ],
        image: '../assets/images/side-step-balance.jpg',
        description: 'Improves lateral balance and leg control.'
      },
      // 23
      {
        name: 'Single-Leg Calf Raise',
        reps: '3x15 each leg',
        step: [
          'Stand on right leg',
          'Raise heel, hold 1s, lower',
          'Switch legs'
        ],
        image: '../assets/images/single-leg-calf-raise.jpg',
        description: 'Ankle strength and balance.'
      },
      // 24
      {
        name: 'Lunge with Twist',
        reps: '3x12 each side',
        step: [
          'Step forward into lunge',
          'Twist torso toward front leg',
          'Switch legs'
        ],
        image: '../assets/images/lunge-twist.jpg',
        description: 'Strengthens legs, engages core, improves stability.'
      },
      // 25
      {
        name: 'Reverse Lunge to Knee Raise',
        reps: '3x12 each leg',
        step: [
          'Step back into lunge',
          'Push forward lifting knee to chest',
          'Switch legs'
        ],
        image: '../assets/images/reverse-lunge-knee.jpg',
        description: 'Balance, coordination, and leg strength.'
      },
      // 26
      {
        name: 'Single-Leg Bridge',
        reps: '3x12 each leg',
        step: [
          'Lie on back, lift hips with one leg extended',
          'Lower slowly, switch legs'
        ],
        image: '../assets/images/single-leg-bridge.jpg',
        description: 'Glutes, hamstrings, and core stability.'
      },
      // 27
      {
        name: 'Balance Board Rock',
        reps: '3x15',
        step: [
          'Stand on balance board',
          'Rock forward/backward or side/side',
          'Maintain control'
        ],
        image: '../assets/images/balance-board.jpg',
        description: 'Proprioception and ankle stability.'
      },
      // 28
      {
        name: 'Step-up with Knee Lift',
        reps: '3x12 each leg',
        step: [
          'Step onto bench',
          'Lift opposite knee at top',
          'Return and switch legs'
        ],
        image: '../assets/images/step-up-knee.jpg',
        description: 'Leg strength, core, and balance.'
      },
      // 29
      {
        name: 'Side Leg Circle',
        reps: '3x10 each leg',
        step: [
          'Lie on side, lift top leg',
          'Draw circles in air slowly',
          'Switch legs'
        ],
        image: '../assets/images/side-leg-circle.jpg',
        description: 'Hip mobility and leg control.'
      },
      // 30
      {
        name: 'Savasana with Deep Breathing',
        reps: '1x5 min',
        step: [
          'Lie on back, arms at sides',
          'Close eyes, breathe deeply',
          'Relax completely'
        ],
        image: '../assets/images/savasana-balance.jpg',
        description: 'Final relaxation for mind-body balance recovery.'
      }
    ],
    cooldown: [
      'Gentle neck stretch - 30 sec each side',
      'Shoulder rolls - 10 reps forward/backward',
      'Hamstring stretch - 30 sec each leg',
      'Quad stretch - 30 sec each leg',
      'Deep breathing - 1 min'
    ],
    safety: [
      'Use support if needed',
      'Avoid sudden movements',
      'Engage core for stability',
      'Move slowly and controlled'
    ],
    demo: '../assets/images/balance-30.svg'
  },
{
    id: 'functional-1',
    title: '30-Exercise Functional Training Routine',
    category: 'Functional',
    level: 'Beginner/Intermediate',
    duration: 60, // minutes
    met: 4.0,
    calories: 250,
    tags: ['functional', 'strength', 'mobility', 'daily movement'],
    target: ['Full body', 'Legs', 'Core', 'Back', 'Arms'],
    equipment: 'Kettlebell / Dumbbell / Resistance bands / Mat',
    warmup: [
      'March in place - 2 min',
      'Arm circles - 30 sec each direction',
      'Hip circles - 10 each direction',
      'Bodyweight squats - 10 reps',
      'Torso twists - 10 each side'
    ],
    main: [
      // 1
      {
        name: 'Kettlebell Swing',
        reps: '3x15',
        step: [
          'Stand with feet shoulder-width apart',
          'Hold kettlebell with both hands',
          'Hinge at hips and swing kettlebell to shoulder height',
          'Control swing back between legs'
        ],
        image: '../assets/images/kettlebell-swing.jpg',
        description: 'Full-body power, hip hinge, and posterior chain engagement.'
      },
      // 2
      {
        name: 'Goblet Squat',
        reps: '3x12',
        step: [
          'Hold dumbbell/kettlebell at chest',
          'Squat down keeping chest upright',
          'Push through heels to stand'
        ],
        image: '../assets/images/goblet-squat.jpg',
        description: 'Legs, glutes, and core strength with functional movement pattern.'
      },
      // 3
      {
        name: 'Walking Lunges',
        reps: '3x12 each leg',
        step: [
          'Step forward into lunge',
          'Push back up and step forward with other leg',
          'Maintain balance and posture'
        ],
        image: '../assets/images/walking-lunge.jpg',
        description: 'Leg strength and mobility for everyday movements.'
      },
      // 4
      {
        name: 'Push-Up to Shoulder Tap',
        reps: '3x12',
        step: [
          'Perform a push-up',
          'At top, tap right shoulder with left hand',
          'Alternate taps'
        ],
        image: '../assets/images/pushup-shoulder-tap.jpg',
        description: 'Upper body strength with core stabilization.'
      },
      // 5
      {
        name: 'Step-Up with Knee Raise',
        reps: '3x12 each leg',
        step: [
          'Step onto a bench or box',
          'Raise opposite knee to chest',
          'Step down and switch legs'
        ],
        image: '../assets/images/step-up-knee.jpg',
        description: 'Leg strength, balance, and functional movement.'
      },
      // 6
      {
        name: 'Plank with Arm Reach',
        reps: '3x10 each arm',
        step: [
          'Hold plank on hands',
          'Extend right arm forward, hold 2s',
          'Switch arms'
        ],
        image: '../assets/images/plank-arm-reach.jpg',
        description: 'Core stability with functional shoulder strength.'
      },
      // 7
      {
        name: 'Deadlift to Press',
        reps: '3x12',
        step: [
          'Hold dumbbells or kettlebell',
          'Perform deadlift, then press overhead',
          'Return to start'
        ],
        image: '../assets/images/deadlift-press.jpg',
        description: 'Full-body functional strength and coordination.'
      },
      // 8
      {
        name: 'Medicine Ball Slam',
        reps: '3x15',
        step: [
          'Hold medicine ball overhead',
          'Slam to floor forcefully',
          'Catch on rebound and repeat'
        ],
        image: '../assets/images/med-ball-slam.jpg',
        description: 'Explosive power, core, and total body engagement.'
      },
      // 9
      {
        name: 'Russian Twist',
        reps: '3x20 (10 each side)',
        step: [
          'Sit with knees bent, lean back slightly',
          'Hold weight or ball, twist torso side to side'
        ],
        image: '../assets/images/russian-twist.jpg',
        description: 'Rotational core strength for functional movements.'
      },
      // 10
      {
        name: 'Single-Leg Romanian Deadlift',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbell opposite hand of standing leg',
          'Hinge forward lifting back leg',
          'Return to standing, switch legs'
        ],
        image: '../assets/images/single-leg-rdl.jpg',
        description: 'Balance, posterior chain, and core stability.'
      },
      // 11
      {
        name: 'Burpee',
        reps: '3x12',
        step: [
          'Squat down, hands on floor',
          'Kick feet back to plank',
          'Jump back to squat and jump up'
        ],
        image: '../assets/images/burpee.jpg',
        description: 'Full-body functional conditioning and cardiovascular endurance.'
      },
      // 12
      {
        name: 'Side Lunge',
        reps: '3x12 each leg',
        step: [
          'Step to side, bend knee, keep opposite leg straight',
          'Push back to start, switch sides'
        ],
        image: '../assets/images/side-lunge.jpg',
        description: 'Hip mobility, leg strength, and lateral movement.'
      },
      // 13
      {
        name: 'Farmer Carry',
        reps: '3x40m',
        step: [
          'Hold heavy dumbbells in each hand',
          'Walk straight, maintain posture',
          'Return'
        ],
        image: '../assets/images/farmer-carry.jpg',
        description: 'Grip, core, and total body stability.'
      },
      // 14
      {
        name: 'Overhead Carry',
        reps: '3x30m',
        step: [
          'Hold dumbbell or kettlebell overhead',
          'Walk maintaining straight posture',
          'Return and switch arms if needed'
        ],
        image: '../assets/images/overhead-carry.jpg',
        description: 'Shoulder stability and core engagement.'
      },
      // 15
      {
        name: 'Step-Through Lunge',
        reps: '3x12 each side',
        step: [
          'Step forward into lunge, twist torso toward front leg',
          'Step back, switch sides'
        ],
        image: '../assets/images/step-through-lunge.jpg',
        description: 'Functional strength with rotational mobility.'
      },
      // 16
      {
        name: 'Wall Sit with Arm Raise',
        reps: '3x30s',
        step: [
          'Sit against wall, thighs parallel to floor',
          'Raise arms overhead, hold',
          'Release and repeat'
        ],
        image: '../assets/images/wall-sit-arm.jpg',
        description: 'Leg endurance and shoulder engagement.'
      },
      // 17
      {
        name: 'Lunge with Bicep Curl',
        reps: '3x12 each leg',
        step: [
          'Hold dumbbells',
          'Step into lunge and curl arms simultaneously',
          'Return and switch legs'
        ],
        image: '../assets/images/lunge-bicep-curl.jpg',
        description: 'Combines lower body and upper body functional strength.'
      },
      // 18
      {
        name: 'Squat to Rotation',
        reps: '3x12 each side',
        step: [
          'Perform squat holding weight at chest',
          'Rotate torso to right on standing',
          'Alternate sides'
        ],
        image: '../assets/images/squat-rotation.jpg',
        description: 'Legs, core, and rotational mobility.'
      },
      // 19
      {
        name: 'High Knee Run in Place',
        reps: '3x1 min',
        step: [
          'Run in place lifting knees high',
          'Pump arms actively'
        ],
        image: '../assets/images/high-knee-run.jpg',
        description: 'Functional cardio and hip flexor activation.'
      },
      // 20
      {
        name: 'Plank with Knee Tap',
        reps: '3x12 each knee',
        step: [
          'Hold plank',
          'Tap right knee to floor, switch sides',
          'Maintain tight core'
        ],
        image: '../assets/images/plank-knee-tap.jpg',
        description: 'Core stability with dynamic functional movement.'
      },
      // 21
      {
        name: 'Side Plank with Hip Dip',
        reps: '3x10 each side',
        step: [
          'Hold side plank',
          'Lower hips slowly, lift back',
          'Switch sides'
        ],
        image: '../assets/images/side-plank-hip.jpg',
        description: 'Obliques, shoulder stability, and balance.'
      },
      // 22
      {
        name: 'Medicine Ball Chest Pass',
        reps: '3x12',
        step: [
          'Hold medicine ball at chest',
          'Push forward to partner or wall',
          'Catch and repeat'
        ],
        image: '../assets/images/med-ball-chest-pass.jpg',
        description: 'Upper body power and coordination.'
      },
      // 23
      {
        name: 'Lateral Step Over',
        reps: '3x12 each leg',
        step: [
          'Step sideways over low object',
          'Maintain balance',
          'Alternate sides'
        ],
        image: '../assets/images/lateral-step-over.jpg',
        description: 'Leg strength, balance, and functional mobility.'
      },
      // 24
      {
        name: 'Reverse Fly',
        reps: '3x12',
        step: [
          'Hold dumbbells, hinge forward slightly',
          'Raise arms sideways to shoulder level',
          'Lower slowly'
        ],
        image: '../assets/images/reverse-fly.jpg',
        description: 'Shoulder and upper back functional strength.'
      },
      // 25
      {
        name: 'Rotational Lunge with Dumbbell',
        reps: '3x12 each side',
        step: [
          'Step into lunge, rotate torso holding weight',
          'Return and switch sides'
        ],
        image: '../assets/images/rotational-lunge.jpg',
        description: 'Lower body and rotational functional movement.'
      },
      // 26
      {
        name: 'Farmer Carry Side Bend',
        reps: '3x15 each side',
        step: [
          'Hold dumbbell in one hand',
          'Walk and slightly lean opposite side',
          'Switch sides'
        ],
        image: '../assets/images/farmer-carry-side.jpg',
        description: 'Core engagement and lateral balance.'
      },
      // 27
      {
        name: 'Step-Up with Press',
        reps: '3x12 each leg',
        step: [
          'Step onto bench holding weight',
          'Press overhead at top',
          'Return and switch legs'
        ],
        image: '../assets/images/step-up-press.jpg',
        description: 'Leg and shoulder functional strength.'
      },
      // 28
      {
        name: 'Push-Up to Side Plank',
        reps: '3x10 each side',
        step: [
          'Do push-up',
          'Rotate into side plank, hold briefly',
          'Return and switch sides'
        ],
        image: '../assets/images/pushup-side-plank.jpg',
        description: 'Full-body functional strength and core stability.'
      },
      // 29
      {
        name: 'Squat to Row (Band)',
        reps: '3x12',
        step: [
          'Hold resistance band',
          'Squat down, then pull band elbows back',
          'Return and repeat'
        ],
        image: '../assets/images/squat-to-row.jpg',
        description: 'Legs, back, and arms functional strength.'
      },
      // 30
      {
        name: 'Savasana / Recovery Pose',
        reps: '1x5 min',
        step: [
          'Lie on back, arms at sides',
          'Close eyes, breathe deeply',
          'Relax completely'
        ],
        image: '../assets/images/savasana-functional.jpg',
        description: 'Recovery, relaxation, and mind-body integration.'
      }
    ],
    cooldown: [
      'Gentle walk - 2 min',
      'Hamstring stretch - 30 sec each leg',
      'Quad stretch - 30 sec each leg',
      'Shoulder stretch - 30 sec each side',
      'Deep breathing - 2 min'
    ],
    safety: [
      'Use proper form',
      'Start with lighter weights',
      'Control movements to avoid injury',
      'Engage core throughout'
    ],
    demo: '../assets/images/functional-30.svg'
  },


  {
    id: 'hiit-2',
    title: 'Ultimate 20-Exercise HIIT',
    category: 'HIIT',
    level: 'Advanced',
    duration: 45,
    met: 10,
    calories: 500,
    tags: ['hiit', 'fat burn', 'stamina', 'endurance'],
    target: ['Full body', 'Cardio', 'Core', 'Legs', 'Arms'],
    equipment: 'None',
    warmup: [
      'Jog in place - 2 min',
      'Arm circles - 30 sec each',
      'Leg swings - 10 per leg',
      'Torso twists - 30 sec',
      'High knees - 1 min'
    ],
    main: [
      {
        name: 'Burpees',
        time: '30s x4',
        step: [
          'Stand straight, feet shoulder-width apart',
          'Drop into plank position',
          'Do one push-up',
          'Jump up explosively',
          'Land softly and repeat'
        ],
        image: '../assets/images/burpees.jpg',
        description: 'Full-body exercise improving strength, endurance, and cardiovascular fitness.'
      },
      {
        name: 'Jump Squats',
        time: '30s x4',
        step: [
          'Stand feet shoulder-width apart',
          'Squat down, keeping chest up',
          'Explode upwards, jump as high as possible',
          'Land softly into squat'
        ],
        image: '../assets/images/jump-squats.jpg',
        description: 'Strengthens legs, glutes, and improves explosive power.'
      },
      {
        name: 'Mountain Climbers',
        time: '30s x4',
        step: [
          'Start in plank position',
          'Drive right knee to chest',
          'Switch legs rapidly',
          'Keep core tight'
        ],
        image: '../assets/images/mountain-climbers.jpg',
        description: 'Works core, shoulders, and improves cardio endurance.'
      },
      {
        name: 'High Knees',
        time: '30s x4',
        step: [
          'Run in place',
          'Lift knees to waist height',
          'Pump arms quickly',
          'Maintain fast pace'
        ],
        image: '../assets/images/high-knees.jpg',
        description: 'Increases heart rate, strengthens legs, and improves agility.'
      },
      {
        name: 'Lunge Jumps',
        time: '30s x4',
        step: [
          'Step into lunge with right leg forward',
          'Jump and switch legs mid-air',
          'Land softly and repeat'
        ],
        image: '../assets/images/lunge-jumps.jpg',
        description: 'Targets quads, glutes, and builds explosive leg power.'
      },
      {
        name: 'Push-up with Shoulder Tap',
        time: '30s x4',
        step: [
          'Perform a push-up',
          'Tap left shoulder with right hand',
          'Tap right shoulder with left hand',
          'Keep core tight'
        ],
        image: '../assets/images/pushup-shoulder-tap.jpg',
        description: 'Strengthens chest, shoulders, triceps and core simultaneously.'
      },
      {
        name: 'Plank Jacks',
        time: '30s x4',
        step: [
          'Start in plank position',
          'Jump feet apart and together like jumping jacks',
          'Maintain stable upper body'
        ],
        image: '../assets/images/plank-jacks.jpg',
        description: 'Core and cardio exercise improving heart rate and stability.'
      },
      {
        name: 'Butt Kicks',
        time: '30s x4',
        step: [
          'Run in place, kicking heels toward glutes',
          'Keep core engaged',
          'Maintain quick pace'
        ],
        image: '../assets/images/butt-kicks.jpg',
        description: 'Warms up hamstrings and boosts cardiovascular endurance.'
      },
      {
        name: 'Skater Jumps',
        time: '30s x4',
        step: [
          'Jump sideways landing on one leg',
          'Swing opposite leg behind and arms across body',
          'Alternate sides continuously'
        ],
        image: '../assets/images/skater-jumps.jpg',
        description: 'Improves lateral power, balance, and leg strength.'
      },
      {
        name: 'Tuck Jumps',
        time: '30s x4',
        step: [
          'Stand with feet shoulder-width apart',
          'Jump explosively bringing knees to chest',
          'Land softly with knees slightly bent'
        ],
        image: '../assets/images/tuck-jumps.jpg',
        description: 'Explosive cardio exercise targeting legs and core.'
      },
      {
        name: 'Side Plank with Hip Dip',
        time: '30s each side x3',
        step: [
          'Start in side plank on forearm',
          'Lower hips toward floor slowly',
          'Lift back to starting position'
        ],
        image: '../assets/images/side-plank-hip-dip.jpg',
        description: 'Strengthens obliques, shoulders, and core.'
      },
      {
        name: 'Spider-Man Plank',
        time: '30s x3',
        step: [
          'Start in plank',
          'Bring right knee toward right elbow',
          'Return and switch legs continuously'
        ],
        image: '../assets/images/spiderman-plank.jpg',
        description: 'Engages core, obliques, and hip flexors.'
      },
      {
        name: 'Jumping Lunges',
        time: '30s x4',
        step: [
          'Lunge forward with right leg',
          'Jump and switch legs mid-air',
          'Land softly in lunge'
        ],
        image: '../assets/images/jumping-lunges.jpg',
        description: 'Builds leg strength, balance, and explosive power.'
      },
      {
        name: 'Plyometric Push-ups',
        reps: '3x10',
        step: [
          'Perform push-up explosively pushing off floor',
          'Land softly and repeat',
          'Keep core tight'
        ],
        image: '../assets/images/plyo-pushup.jpg',
        description: 'Develops upper body power and chest strength.'
      },
      {
        name: 'Jump Rope',
        time: '2 min',
        step: [
          'Jump continuously using rope',
          'Keep elbows close to body',
          'Maintain consistent pace'
        ],
        image: '../assets/images/jump-rope.jpg',
        description: 'Classic cardio exercise boosting stamina and coordination.'
      },
      {
        name: 'Bear Crawl',
        time: '30s x3',
        step: [
          'Start on hands and knees',
          'Lift knees slightly off floor',
          'Move forward and backward while keeping core tight'
        ],
        image: '../assets/images/bear-crawl.jpg',
        description: 'Total body conditioning improving strength and coordination.'
      },
      {
        name: 'Lateral Hops',
        time: '30s x3',
        step: [
          'Jump side to side over imaginary line',
          'Land softly with knees bent',
          'Keep upper body stable'
        ],
        image: '../assets/images/lateral-hops.jpg',
        description: 'Improves agility, leg power, and balance.'
      },
      {
        name: 'Flutter Kicks',
        time: '30s x3',
        step: [
          'Lie on back, hands under glutes',
          'Lift legs slightly off floor',
          'Kick legs alternately up and down quickly'
        ],
        image: '../assets/images/flutter-kicks.jpg',
        description: 'Strengthens lower abs and hip flexors.'
      },
      {
        name: 'Russian Twists',
        reps: '3x20',
        step: [
          'Sit on mat, knees bent',
          'Lean back slightly, lift feet off floor',
          'Twist torso side to side, touching floor'
        ],
        image: '../assets/images/russian-twist.jpg',
        description: 'Targets obliques and core rotational strength.'
      },
      {
        name: 'Burpee Broad Jump',
        reps: '3x10',
        step: [
          'Perform burpee',
          'Jump forward as far as possible',
          'Land softly, reset and repeat'
        ],
        image: '../assets/images/burpee-broad-jump.jpg',
        description: 'Combines explosive power, cardio, and full-body strength.'
      }
    ],
    cooldown: [
      'Slow jog in place - 2 min',
      'Hamstring stretch - 30 sec each leg',
      'Quad stretch - 30 sec each leg',
      'Shoulder stretch - 30 sec each side',
      'Child pose - 1 min',
      'Deep breathing - 1 min'
    ],
    safety: [
      'Keep movements controlled where possible',
      'Maintain neutral spine',
      'Land softly on jumps',
      'Engage core throughout',
      'Take breaks if heart rate too high'
    ],
    demo: '../assets/images/hiit.svg'
  }
  ];

  // You can now use `sampleWorkouts` in your app
// })();

(function(){

  function renderWorkoutDetails(workoutId){
    const workout = sampleWorkouts.find(w => w.id === workoutId);
    if(!workout) return;

    // Hide the buttons container
    const buttonsContainer = document.querySelector('#workout-list');
    buttonsContainer.style.display = 'none';

    const container = document.querySelector('#workout-detail');
    container.innerHTML = ''; // clear previous workout

    // Title & info
    const title = document.createElement('h2');
    title.textContent = workout.title;
    title.style.textAlign='center';
    container.appendChild(title);

    const info = document.createElement('p');
    info.innerHTML = `<strong>Duration:</strong> ${workout.duration} min • <strong>Level:</strong> ${workout.level}<br>
                      <strong>Calories est.:</strong> ${workout.calories}`;
    info.style.textAlign='center';
    info.style.marginBottom='20px';
    container.appendChild(info);

    // Exercises grid
    const grid = document.createElement('div');
    grid.style.display='grid';
    grid.style.gridTemplateColumns='repeat(auto-fit, minmax(250px, 1fr))';
    grid.style.gap='20px';
    container.appendChild(grid);

    workout.main.forEach(ex => {
      const card = document.createElement('div');
      card.style.border='1px solid #ddd';
      card.style.borderRadius='12px';
      card.style.overflow='hidden';
      card.style.background='#fff';
      card.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)';
      card.style.transition='transform 0.2s';
      card.addEventListener('mouseover', ()=> card.style.transform='scale(1.03)');
      card.addEventListener('mouseout', ()=> card.style.transform='scale(1)');

      // Image
      const img = document.createElement('img');
      img.src = ex.image;
      img.alt = ex.name;
      img.style.width='100%';
      img.style.height='180px';
      img.style.objectFit='cover';
      card.appendChild(img);

      // Info div
      const infoDiv = document.createElement('div');
      infoDiv.style.padding='10px';

      const name = document.createElement('h4');
      name.textContent = ex.name;
      infoDiv.appendChild(name);

      const time = document.createElement('p');
      time.textContent = ex.reps || ex.time || '';
      infoDiv.appendChild(time);

      // Single “View Steps & Benefits” button per exercise
      const btn = document.createElement('button');
      btn.textContent='View Steps & Benefits';
      btn.style.margin='10px 0';
      btn.style.padding='6px 12px';
      btn.style.border='none';
      btn.style.borderRadius='6px';
      btn.style.background='#576ae1';
      btn.style.color='#fff';
      btn.style.cursor='pointer';
      infoDiv.appendChild(btn);

      // Steps & benefits container (hidden by default)
      const details = document.createElement('div');
      details.style.display='none';
      details.style.fontSize='14px';
      details.style.lineHeight='1.5';
      details.style.marginTop='6px';

      const stepsTitle = document.createElement('strong');
      stepsTitle.textContent='Steps:';
      details.appendChild(stepsTitle);

      const ol = document.createElement('ol');
      ex.step.forEach(s=>{
        const li = document.createElement('li');
        li.textContent=s;
        ol.appendChild(li);
      });
      details.appendChild(ol);

      const benefitsTitle = document.createElement('strong');
      benefitsTitle.textContent='Benefits:';
      benefitsTitle.style.display='block';
      benefitsTitle.style.marginTop='6px';
      details.appendChild(benefitsTitle);

      const benefitsText = document.createElement('p');
      benefitsText.textContent=ex.description;
      details.appendChild(benefitsText);

      // Toggle show/hide
      btn.addEventListener('click', ()=>{
        if(details.style.display==='block'){
          details.style.display='none';
          btn.textContent='View Steps & Benefits';
        } else {
          details.style.display='block';
          btn.textContent='Hide Steps & Benefits';
        }
      });

      infoDiv.appendChild(details);
      card.appendChild(infoDiv);
      grid.appendChild(card);
    });
  }

  // Attach buttons
  document.querySelectorAll('.detail-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      renderWorkoutDetails(btn.dataset.workout);
      document.querySelector('#workout-detail').scrollIntoView({behavior:'smooth'});
    });
  });

})();


  // ============ STATE =============
  let activeFilters = { difficulty: 'All', duration: null, equipment: 'All', query: '', calories: null, sort: null };
  let planTarget = null;

  // ============ HELPERS ===========
  function getCurrentUserSafe(){ return auth.isAuthenticated() ? auth.getCurrentUser() : null; }
  function getById(id){ return sampleWorkouts.find(w=>w.id===id); }
  function normalizeDay(sh){ const map={Mon:'monday',Tue:'tuesday',Wed:'wednesday',Thu:'thursday',Fri:'friday',Sat:'saturday',Sun:'sunday'}; return map[sh]||sh.toLowerCase(); }

  function matchesFilters(w){
    if(activeFilters.difficulty && activeFilters.difficulty!=='All' && w.level!==activeFilters.difficulty) return false;
    if(activeFilters.equipment && activeFilters.equipment!=='All' && w.equipment!==activeFilters.equipment) return false;
    if(activeFilters.duration){
      if(activeFilters.duration==='10-20' && !(w.duration>=10 && w.duration<20)) return false;
      if(activeFilters.duration==='20-40' && !(w.duration>=20 && w.duration<40)) return false;
      if(activeFilters.duration==='40+' && !(w.duration>=40)) return false;
    }
    if(activeFilters.calories){ const max=Number(activeFilters.calories); if(!(w.calories<=max)) return false; }
    if(activeFilters.query){
      const q=activeFilters.query.toLowerCase();
      if(!(w.title.toLowerCase().includes(q) || (w.target && w.target.join(' ').toLowerCase().includes(q)) || (w.tags && w.tags.join(' ').toLowerCase().includes(q)))) return false;
    }
    return true;
  }

  function sortWorkouts(list){
    if(!activeFilters.sort) return list;
    const l=[...list];
    if(activeFilters.sort==='shortest') return l.sort((a,b)=>a.duration-b.duration);
    if(activeFilters.sort==='longest') return l.sort((a,b)=>b.duration-a.duration);
    if(activeFilters.sort==='beginner') return l.sort((a,b)=>(a.level==='Beginner'? -1:1));
    return l;
  }

  function isInUserPlan(user,w){ if(!user||!user.weeklyPlan) return false; return Object.keys(user.weeklyPlan).some(d=>(user.weeklyPlan[d]||[]).includes(w.title)); }

  function caloriesEstimate(met, weightKg, durationMin){ if(!weightKg) return null; return Math.round(met*3.5*weightKg/200*durationMin); }

  // ================= RENDER WORKOUTS ===============
  function renderWorkouts(){
    const list=document.querySelector('.workout-list'); if(!list) return;
    list.innerHTML='';
    let shown=sampleWorkouts.filter(matchesFilters);
    shown=sortWorkouts(shown);
    if(!shown.length){ document.querySelector('.empty-state').style.display='block'; return; }
    else document.querySelector('.empty-state').style.display='none';

    const user=getCurrentUserSafe();
    shown.forEach(w=>{
      const isFav=user && user.favorites && user.favorites.find(f=>f.id===w.id);
      const completedCount=user && user.history ? user.history.filter(h=>h.id===w.id).length : 0;
      const el=document.createElement('article');
      el.className='workout card';
      el.innerHTML=`
        <div style="position:relative">
          <img src="${w.demo}" alt="${w.title}" loading="lazy" />
          <div class="quick-start" data-id="${w.id}">Start</div>
        </div>
        <div style="padding-top:8px;position:relative">
          <h3>${w.title} ${w.tags?.includes('trending')?'<span class="badge-tag">🔥 Trending</span>':''} ${w.tags?.includes('popular')?'<span class="badge-tag">⭐ Popular</span>':''} ${w.tags?.includes('new')?'<span class="badge-tag">🆕 New</span>':''}</h3>
          <div class="meta"><span class="small muted">${w.level} • ${w.duration} mins • Est ${w.calories} kcal</span><div style="margin-left:auto"></div></div>
          <p class="small muted">Targets: ${w.target.join(', ')}</p>
          <div class="meta" style="margin-top:8px">
            <a class="btn" href="/pages/workout-detail.html?id=${w.id}">Details</a>
            <button class="btn fav" data-id="${w.id}" aria-pressed="${!!isFav}">${isFav?'❤':'♡'}</button>
            <button class="btn plan" data-id="${w.id}">${isInUserPlan(user,w)?'Added':'Add to Plan'}</button>
            <div style="margin-left:auto">${completedCount?`<span class="badge-tag">✔ Completed ${completedCount}</span>`:''}</div>
          </div>
        </div>`;
      list.appendChild(el);
    });

    // ====== HANDLERS =======
    list.querySelectorAll('.fav').forEach(b=>b.addEventListener('click',function(){ toggleFavorite(this.dataset.id,this); }));
    list.querySelectorAll('.plan').forEach(b=>b.addEventListener('click',function(){ openPlanModal(this.dataset.id); }));
    list.querySelectorAll('.quick-start').forEach(b=>b.addEventListener('click',function(){ startInlineTimer(this.dataset.id,this); }));
    updateTopStats();
  }

  // ================= FAVORITES ==================
  function toggleFavorite(id, btnEl){
    if(!auth.isAuthenticated()){ location.href='/signup.html'; return; }
    const u=auth.getCurrentUser(); u.favorites=u.favorites||[];
    const idx=u.favorites.findIndex(f=>f.id===id);
    if(idx>=0){ u.favorites.splice(idx,1); btnEl.textContent='♡'; showToast('Removed from favorites'); }
    else{ const w=getById(id); u.favorites.push({id:w.id,title:w.title,type:w.category}); btnEl.textContent='❤'; showToast('Added to Favorites'); }
    auth.saveCurrentUser(u); renderWorkouts();
  }

  // ================= INLINE TIMER ==================
  function startInlineTimer(id, el){
    const w=getById(id); if(!w) return;
    let secs=0; const display=el; display.textContent='Stop';
    const timer=setInterval(()=>{ secs++; display.textContent=Math.floor(secs/60)+':'+(secs%60).toString().padStart(2,'0'); },1000);
    function stop(){
      clearInterval(timer); display.textContent='Start';
      if(confirm('Mark workout as completed?')) markCompleted(w,Math.round(secs/60),w.calories);
      display.removeEventListener('click',stop);
    }
    display.addEventListener('click',stop);
  }

  // ================= PLAN MODAL ==================
  function openPlanModal(id){
    planTarget=id;
    const modal=document.getElementById('plan-modal'); if(!modal) return;
    modal.classList.add('show'); modal.setAttribute('aria-hidden','false');
    const daySelect=document.getElementById('plan-day'); const user=getCurrentUserSafe(); const w=getById(id);
    const confirm=document.getElementById('plan-confirm');
    confirm.disabled=user && user.weeklyPlan && (user.weeklyPlan[normalizeDay(daySelect.value)]||[]).includes(w.title);
  }
  function closePlanModal(){ planTarget=null; const modal=document.getElementById('plan-modal'); if(!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }

  // ================= MARK COMPLETED ==================
  function markCompleted(w, minutes, calories){
    if(!auth.isAuthenticated()){ location.href='/signup.html'; return; }
    const u=auth.getCurrentUser(); u.history=u.history||[];
    u.history.unshift({id:w.id,title:w.title,date:new Date().toISOString(),duration:minutes,calories:calories});
    if(u.history.length>200) u.history=u.history.slice(0,200);
    auth.saveCurrentUser(u); showToast('Workout recorded'); renderWorkouts(); renderHistory(); updateTopStats();
  }

  // ================= RENDER HISTORY ==================
  function renderHistory(){
    if(!auth.isAuthenticated()) return;
    const u=auth.getCurrentUser(); const listEl=document.querySelector('.history-list'); if(!listEl) return;
    listEl.innerHTML='';
    (u.history||[]).slice(0,10).forEach(h=>{
      const li=document.createElement('li');
      li.textContent=`${new Date(h.date).toLocaleString()}: ${h.title} (${h.duration}m, ${h.calories||0} kcal)`;
      listEl.appendChild(li);
    });
  }

  // ================= RENDER WEEKLY PLAN ==================
  function renderWeeklyPlan(){
    const el=document.querySelector('.weekly-plan'); if(!el) return;
    if(!auth.isAuthenticated()){ el.innerHTML='<p class="muted">Login to manage your weekly plan</p>'; return; }
    const u=getCurrentUserSafe(); el.innerHTML='';
    const days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    days.forEach(d=>{
      const dayEl=document.createElement('div'); dayEl.className='plan-day';
      dayEl.innerHTML=`<strong>${d.slice(0,3)}</strong><div>${(u.weeklyPlan && u.weeklyPlan[d])? u.weeklyPlan[d].join(', '):'Rest'}</div>`;
      el.appendChild(dayEl);
    });
  }

  // ================= FAVORITES PAGE ==================
  function renderFavorites(){
    const el=document.querySelector('.favorites-list'); if(!el) return;
    el.innerHTML='';
    if(!auth.isAuthenticated()){ el.innerHTML='<p class="muted">Please <a href="/signup.html">login</a> to see favorites</p>'; return; }
    const u=getCurrentUserSafe(); const favs=u.favorites||[];
    if(!favs.length){ el.innerHTML='<p class="muted">No favorites yet. Find workouts and tap ❤ to add.</p>'; return; }
    favs.forEach(f=>{
      const w=getById(f.id);
      const item=document.createElement('div'); item.className='fav-item card';
      item.innerHTML=`<img src="${w?w.demo:'../assets/images/workout-1.svg'}" alt="${f.title}" style="width:72px;height:72px;object-fit:cover;border-radius:8px;margin-right:10px" />
        <div><h4>${f.title}</h4><div class="small muted">${f.type}</div><div style="margin-top:8px"><a class="btn" href="/pages/workout-detail.html?id=${f.id}">Open</a> <button class="btn ghost remove" data-id="${f.id}">Remove</button></div></div>`;
      el.appendChild(item);
    });
    el.querySelectorAll('.remove').forEach(b=>b.addEventListener('click',function(){
      const id=this.dataset.id; const u=getCurrentUserSafe();
      u.favorites=(u.favorites||[]).filter(x=>x.id!==id); auth.saveCurrentUser(u); renderFavorites(); renderWorkouts(); showToast('Removed');
    }));
  }

  // ================= TOP STATS ==================
  function updateTopStats(){
    const total=sampleWorkouts.length; const totalEl=document.getElementById('stat-total'); if(totalEl) totalEl.textContent=total;
    const u=getCurrentUserSafe(); const fav=u?.favorites?.length||0; const favEl=document.getElementById('stat-fav'); if(favEl) favEl.textContent=fav;
    const week=u?.history?.filter(h=>(new Date(h.date))>(Date.now()-7*24*60*60*1000)).length||0; const weekEl=document.getElementById('stat-week'); if(weekEl) weekEl.textContent=week;
    const streakEl=document.getElementById('stat-streak'); if(streakEl) streakEl.textContent=computeStreak(u);
  }
  function computeStreak(u){
    if(!u?.history?.length) return 0;
    const days=new Set(u.history.map(h=>new Date(h.date).toDateString())); let streak=0;
    for(let i=0;i<30;i++){
      const d=new Date(); d.setDate(d.getDate()-i); if(days.has(d.toDateString())) streak++; else break;
    }
    return streak;
  }

  function showToast(txt){
    const t=document.getElementById('toast'); if(!t) return; t.textContent=txt; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200);
  }

  // ================= INIT DOM ==================
  document.addEventListener('DOMContentLoaded', function(){
    // Plan modal handlers
    const close=document.querySelector('#plan-modal .close'); if(close) close.addEventListener('click',closePlanModal);
    document.getElementById('plan-cancel').addEventListener('click',closePlanModal);
    document.getElementById('plan-day').addEventListener('change',function(){
      const u=getCurrentUserSafe(); const confirm=document.getElementById('plan-confirm'); const w=getById(planTarget);
      confirm.disabled=u && u.weeklyPlan && (u.weeklyPlan[normalizeDay(this.value)]||[]).includes(w?w.title:'');
    });
    document.getElementById('plan-confirm').addEventListener('click',function(){
      if(!auth.isAuthenticated()){ location.href='/signup.html'; return; }
      const dayRaw=document.getElementById('plan-day').value;
      const day=normalizeDay(dayRaw);
      const time=document.getElementById('plan-time').value;
      const u=getCurrentUserSafe(); u.weeklyPlan=u.weeklyPlan||{}; u.weeklyPlan[day]=u.weeklyPlan[day]||[];
      const w=getById(planTarget); if(!w) return;
      if(u.weeklyPlan[day].includes(w.title)){ showToast('Already added'); return; }
      u.weeklyPlan[day].push(w.title); auth.saveCurrentUser(u); showToast('Added to plan: '+dayRaw+' ('+time+')');
      closePlanModal(); renderWorkouts(); renderWeeklyPlan();
    });

    // Filters
    document.querySelectorAll('.filters .chip').forEach(b=>b.addEventListener('click',function(){
      const type=this.dataset.type; const filter=this.dataset.filter; if(type) activeFilters[type]=filter;
      document.querySelectorAll('.filters .chip').forEach(x=>x.classList.remove('active')); this.classList.add('active');
      renderWorkouts();
    }));
    const sq=document.getElementById('workout-search'); if(sq) sq.addEventListener('input',function(){ activeFilters.query=this.value; renderWorkouts(); });
    const cal=document.getElementById('calories-max'); if(cal) cal.addEventListener('change',function(){ activeFilters.calories=this.value||null; renderWorkouts(); });
    const sort=document.getElementById('sort-by'); if(sort) sort.addEventListener('change',function(){ activeFilters.sort=this.value||null; renderWorkouts(); });
    document.getElementById('reset-filters').addEventListener('click',function(){
      activeFilters={difficulty:'All',duration:null,equipment:'All',query:'',calories:null,sort:null};
      document.querySelectorAll('.filters .chip').forEach(x=>x.classList.remove('active'));
      const all=document.querySelector('.filters .chip[data-filter="All"]'); if(all) all.classList.add('active');
      if(sq) sq.value=''; if(cal) cal.value=''; if(sort) sort.value='';
      renderWorkouts();
    });

    // Get started buttons
    const getStartedBtn=document.getElementById('get-started'); if(getStartedBtn) getStartedBtn.addEventListener('click',function(){ if(!auth.isAuthenticated()) location.href='/signup.html'; else location.href='/pages/beginner-plan.html'; });
    const ctaGet=document.getElementById('cta-get-started'); if(ctaGet) ctaGet.addEventListener('click',function(e){ e.preventDefault(); if(!auth.isAuthenticated()) location.href='/signup.html'; else location.href='/pages/beginner-plan.html'; });

    // Mobile FAB
    const fab=document.getElementById('mobile-plan-btn'); if(fab) fab.addEventListener('click',function(){ const panel=document.querySelector('.weekly-panel'); if(panel) panel.scrollIntoView({behavior:'smooth',block:'center'}); else document.getElementById('plan-modal').classList.add('show'); });

    renderWorkouts(); renderHistory(); renderWeeklyPlan(); updateTopStats();
  });

  // ================ DETAIL PAGE ================
  function loadWorkoutDetail(){
    const id=new URLSearchParams(location.search).get('id'); if(!id) return;
    const w=getById(id); if(!w) return;

    const titleEl=document.querySelector('main h1'); if(titleEl) titleEl.textContent=w.title;
    const levelEl=document.getElementById('w-level'); if(levelEl) levelEl.textContent=w.level;
    const durEl=document.getElementById('w-duration'); if(durEl) durEl.textContent=w.duration+' mins';
    const calEl=document.getElementById('cal-est'); const user=getCurrentUserSafe();
    if(calEl && user?.weight) calEl.textContent=caloriesEstimate(w.met,Number(user.weight),w.duration)+' kcal';
    else if(calEl) calEl.textContent=w.calories+' kcal';

    const eq=document.getElementById('w-equipment'); if(eq) eq.textContent=w.equipment||'None';

    // Targets
    const benefits=document.getElementById('w-benefits'); if(benefits){ benefits.innerHTML=''; (w.target||[]).forEach(t=>{ const li=document.createElement('li'); li.textContent=t; benefits.appendChild(li); }); }

    // Warmup
    const wl=document.querySelector('.warmup'); if(wl){ wl.innerHTML=''; (w.warmup||[]).forEach(i=>{
      const li=document.createElement('li'); li.innerHTML=`<strong>${i.name||i}</strong> ${i.reps||i.time||''}`;
      if(i.step){ const ol=document.createElement('ol'); i.step.forEach(s=>{ const sli=document.createElement('li'); sli.textContent=s; ol.appendChild(sli); }); li.appendChild(ol); }
      wl.appendChild(li);
    }); }

    // Main exercises
    const ml=document.querySelector('.main-ex'); if(ml){ ml.innerHTML=''; (w.main||[]).forEach(i=>{
      const li=document.createElement('li'); li.innerHTML=`<strong>${i.name}</strong> ${i.reps||i.time?'<span class="muted">'+(i.reps||i.time)+'</span>':''}`;
      if(i.step){ const ol=document.createElement('ol'); i.step.forEach(s=>{ const sli=document.createElement('li'); sli.textContent=s; ol.appendChild(sli); }); li.appendChild(ol); }
      ml.appendChild(li);
    }); }

    // Cooldown
    const cl=document.querySelector('.cooldown'); if(cl){ cl.innerHTML=''; (w.cooldown||[]).forEach(i=>{ const li=document.createElement('li'); li.textContent=i.name||i; if(i.step){ const ol=document.createElement('ol'); i.step.forEach(s=>{ const sli=document.createElement('li'); sli.textContent=s; ol.appendChild(sli); }); li.appendChild(ol); } cl.appendChild(li); }); }

    // Safety
    const saf=document.querySelector('.safety'); if(saf){ saf.innerHTML=''; (w.safety||[]).forEach(s=>{ const li=document.createElement('li'); li.textContent=s; saf.appendChild(li); }); }

    // Demo image
    const demo=document.getElementById('w-demo'); if(demo){ demo.src=w.demo; demo.alt=w.title+' demo'; }

    // Plan & Fav buttons
    const pb=document.getElementById('plan-btn'); if(pb) pb.addEventListener('click',e=>{ e.preventDefault(); openPlanModal(w.id); });
    const favBtn=document.getElementById('fav-btn'); if(favBtn){ favBtn.addEventListener('click',()=>toggleFavorite(w.id,favBtn)); const u=getCurrentUserSafe(); favBtn.textContent=(u?.favorites?.find(f=>f.id===w.id)?'❤':'♡'); }
  }

  // ================= EXPORT ==================
  window.workouts={ renderWorkouts, loadWorkoutDetail, markCompleted, renderHistory, renderWeeklyPlan, renderFavorites, sampleWorkouts };

})();
