/* UniHelper — shared content data
   One source for articles and community threads, used by Home, Learn and
   Peer Support so the same item looks and links the same everywhere. */
"use strict";

window.UH = window.UH || {};

UH.articles = [
  {
    id: "handling-life-stressors", category: "Stress", title: "Healthy Ways to Handle Life's Stressors",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "American Psychological Association", url: "https://www.apa.org/topics/stress/tips" },
    deck: "Stress is a normal survival response, but a mix of evidence-based habits can keep it from wearing you down.",
    sections: [
      ["Why stress is not always the enemy", "The stress response is a survival tool that helps your body react to threats. Some stress is even positive, like the nerves before giving a speech you are proud of. The problem starts when a stressor cannot be avoided, such as a loved one's medical crisis, or when stress becomes chronic. At that point your body's reactions can begin to harm your physical and mental health."],
      ["Reduce what you can, and lean on people", "Start by asking whether you can change the situation itself. You might drop a responsibility, relax your standards, or ask for help. How you think about a stressor also matters, because the same event can feel very different from person to person. Strong social support builds resilience, so reach out strategically: some people are great listeners, while others are better at practical help. Support should go both ways, since a relationship where you only give or only receive can add stress."],
      ["Feed your body and relax your muscles", "Stress hormones like cortisol can affect your appetite and cravings, so aim for a varied diet with plenty of fruits and vegetables instead of a strict plan. Avoid using alcohol to dull stress, because it does not fix the cause. Stress also tightens your muscles and can cause headaches and backaches. Stretching, a warm bath, or progressive muscle relaxation can help. In that technique you tense one muscle group for five to ten seconds, release it, and rest for ten seconds or more before moving on."],
      ["Meditate, sleep, and move", "Research shows that even short mindfulness practice can reduce stress and anxiety. Sit quietly for five minutes, focus on your breathing, and gently return your attention whenever your mind wanders. Protect your sleep with a regular routine, less caffeine late in the day, and screens put away before bed. Movement helps too. In one study, working adults who did moderate exercise reported about half the perceived stress of those who did not, and a brisk 30-minute walk can be enough."],
      ["Spend time in nature and keep what you enjoy", "Studies in several countries link green spaces with better mood, and even watching nature videos can help you recover from stress. When life gets busy, people often drop hobbies first, but cutting out enjoyable things can backfire. Make room for reading, music, or something that makes you laugh, even in small doses."],
      ["When to get extra help", "If these habits are not enough, or stress is getting in the way of daily life, a mental health professional can offer more support. Reaching out is a sensible step, not a sign of weakness."]
    ]
  },
  {
    id: "managing-stress", category: "Stress", title: "Managing Stress Day to Day",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Centers for Disease Control and Prevention (CDC)", url: "https://www.cdc.gov/mental-health/living-with/index.html" },
    deck: "Everyone feels stress, and a few small daily habits for your mind and body can stop it from building up.",
    sections: [
      ["What stress is", "Stress is your body's physical and emotional reaction to new or challenging situations, such as problems with school, work, health, or relationships. It is a normal part of life and can even help you feel capable of solving problems. When it lasts a long time, it is called chronic stress and can make health problems worse."],
      ["How it can show up", "Stress does not look the same for everyone. You might feel fear, anger, sadness, worry, numbness, or frustration. Your appetite, energy, and interests can change, and you may have trouble concentrating or making decisions. Some people have nightmares or poor sleep, or physical reactions like headaches, body pains, stomach problems, or skin rashes. It can also make existing health conditions feel worse and lead some people to use more alcohol or other substances."],
      ["Take care of your mind", "Take breaks from the news and social media. Staying informed is good, but a constant stream of negative events can be upsetting. Make time to unwind by taking deep breaths, stretching, meditating, journaling, or spending time outdoors. Write down specific things you are grateful for each day, which can lift your well-being. Talk with people you trust about how you are feeling, and consider connecting with community or faith groups."],
      ["Take care of your body", "Keep a regular sleep schedule, aiming for seven or more hours as an adult. Build up to about two and a half hours of physical activity a week, for example 20 to 30 minutes a day. Eat plenty of fruits, vegetables, whole grains, and lean protein, and limit salt, added sugar, and unhealthy fats. Limit alcohol, avoid misusing drugs, and stay away from tobacco and vaping. Keep up with regular health check-ups."],
      ["Find what works for you", "Everyone manages stress differently. Try to notice what triggers yours and build a combination of healthy habits that fits your life. Small steps taken daily can make a big difference."],
      ["If you are struggling", "If you or someone you know is in crisis, free and confidential help is available around the clock. In the US you can call or text 988. Elsewhere, contact your local crisis line or a trusted professional."]
    ]
  },
  {
    id: "stress-four-options", category: "Stress", title: "The Four A's of Stress Management",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "HelpGuide.org", url: "https://www.helpguide.org/mental-health/stress/stress-management" },
    deck: "When stress hits, you can avoid it, alter it, adapt to it, or accept it. Choosing the right option helps.",
    sections: [
      ["You have more control than you think", "It is easy to feel like stress just happens to you, but there are healthy ways to reduce it or change how it affects you. They all require change, either to the situation or to your reaction. A helpful way to choose is to think of four options: avoid, alter, adapt, or accept."],
      ["Avoid unnecessary stress", "Not every stressor can or should be avoided, but you may be surprised by how many you can remove. Learn to say no and know your limits. Limit time with people who constantly stress you out, and take control of your environment, such as turning off the news if it makes you anxious or shopping online if the market is a chore. Pare down your to-do list by separating the things you must do from the things you merely feel you should do."],
      ["Alter the situation", "If you cannot avoid something, try to change it. Say how you feel openly and respectfully instead of bottling it up, because resentment makes stress grow. Be willing to compromise and be more assertive. For example, if you have an exam and a chatty roommate arrives, say up front that you only have five minutes. Look for balance between work, social life, and downtime to prevent burnout."],
      ["Adapt to the stressor", "When you cannot change the situation, you can change your expectations and attitude. Reframe problems, for example by treating a traffic jam as a chance to pause or listen to music. Look at the big picture and ask whether it will matter in a month or a year. Perfectionism is a major source of avoidable stress, so aim for \"good enough\" and take a moment to appreciate what is going well."],
      ["Accept what you cannot change", "Some stress, like the loss of a loved one or a serious illness, cannot be prevented. Accepting it can be hard, but it is easier in the long run than fighting reality. Focus on what you can control, which is mostly your own reaction. Look for ways a challenge could help you grow, learn from your mistakes, forgive when it is right to do so, and share your feelings with someone you trust."],
      ["Know when to get help", "The guide also encourages keeping a stress journal to spot your triggers and swapping unhealthy coping habits, like drinking or procrastinating, for healthier ones. If stress feels overwhelming, a professional can help."]
    ]
  },
  {
    id: "improving-self-esteem", category: "Self-Esteem", title: "How Can I Improve My Self-Esteem?",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Nemours KidsHealth", url: "https://kidshealth.org/en/teens/self-esteem.html" },
    deck: "Self-esteem means feeling good about yourself, and there are practical ways to build it, one habit at a time.",
    sections: [
      ["What self-esteem is", "Self-esteem means feeling good about yourself. People with healthy self-esteem feel liked and accepted, are proud of what they do, and believe in themselves. People with low self-esteem tend to be hard on themselves and feel they are not good enough. The good news is that self-esteem can be improved."],
      ["Where it comes from", "Three things shape it. First, the people around you: when parents, teachers, and friends focus on what is good about you and are patient with mistakes, you learn to accept yourself, while bullying and harsh teasing can stick in your mind. Second, the voice in your own head, since thoughts like \"I'm such a loser\" can damage how you feel. Third, learning to do things, whether it is a sport, cooking, painting, or a computer program, because each new skill is a chance to feel proud."],
      ["Choose people and words that lift you up", "Spend time with people who treat you well and let you be yourself, and try to be that kind of friend too. Then listen to your inner voice. Write down what you say to yourself for a few days and ask whether you would say it to a good friend. If not, rewrite it so it is true, fair, and kind. Instead of \"missing those questions was so stupid,\" try \"maybe I can try flash cards next time.\""],
      ["Let go of perfect", "Do your best, but remember that needing to be perfect makes it impossible to feel good about anything less. Accept your best effort and let yourself feel proud of it. If you cannot get past a need to never make mistakes, ask a trusted adult for help."],
      ["Set goals and notice what goes well", "Pick a healthy goal, like exercising more or studying better, make a plan, and track your progress. Pay attention to what is going right instead of only what is wrong. A useful habit is to find three good things that happened each night before bed."],
      ["Help others", "Giving is one of the best ways to build self-esteem. Tutor a classmate, help clean up your neighborhood, or help out at home. Doing things that make a difference, even small ones, helps you feel proud of the kind of person you are."]
    ]
  },
  {
    id: "confidence-and-self-esteem", category: "Self-Esteem", title: "Understanding Confidence and Self-Esteem",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Mind", url: "https://www.mind.org.uk/for-young-people/feelings-and-experiences/confidence-and-self-esteem/" },
    deck: "Confidence and self-esteem are linked to your mental health, and struggling with them sometimes is common.",
    sections: [
      ["Everyone struggles sometimes", "We can all have low confidence or self-esteem at times, and the way we feel about ourselves changes throughout life. If it has been going on for a while, it is okay to ask for help. Everyone deserves to feel good about themselves."],
      ["What confidence is, and is not", "Confidence is believing in and trusting yourself, your abilities, and your ideas. It might mean joining class discussions, asking someone to hang out, learning a new skill, or working through a challenge. It also means accepting yourself, including how you look and who you are, without changing yourself to fit in. Confidence is not thinking you are better than others, being good at everything, never feeling nervous, or being loud and social all the time."],
      ["What self-esteem is", "Self-esteem is how you think and feel about yourself. With high self-esteem you tend to like and value yourself, believe you deserve to be treated well and to look after yourself, feel able to try difficult things, and cope with change. With low self-esteem you may not like yourself, think you are not good at anything, worry about your looks or what others think, avoid social situations, or give yourself a hard time."],
      ["Stories of change", "The article shares examples. Aneesa avoided speaking in class for fear of being laughed at. After presenting a project she worked hard on, and seeing her classmates smile and listen, she felt more relaxed and began raising her hand more. Matt stopped going to dance classes while their self-esteem was low, and slowly worked toward self-acceptance. Small, supported steps can add up."],
      ["When it might be time for support", "Having negative thoughts about yourself now and then is normal. If you feel this way for a long time, it may be a sign you need support. Talking to someone you trust or a professional is a good step, and Mind has a separate tips page for building confidence and self-esteem."]
    ]
  },
  {
    id: "what-is-self-esteem", category: "Self-Esteem", title: "What Is Self-Esteem?",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Verywell Mind", url: "https://www.verywellmind.com/what-is-self-esteem-2795868" },
    deck: "Self-esteem is your overall sense of personal worth, and both too little and too much can cause problems.",
    sections: [
      ["Your sense of worth", "Self-esteem is your overall sense of personal value, similar to self-respect. It describes how confident you are in your abilities and qualities. Related terms include self-worth and self-regard. Research suggests it tends to be lowest in childhood, rises through adolescence and adulthood, and then becomes fairly stable."],
      ["Why it matters", "Self-esteem affects your decisions, relationships, emotional health, and overall well-being. It also influences motivation. People with a healthy, positive view of themselves recognize their potential and are more likely to take on new challenges."],
      ["Low self-esteem", "People with low self-esteem tend to doubt their abilities and decisions. They may avoid trying new things because they do not think they will reach their goals. They can struggle to express their needs in relationships and may feel unworthy or unlovable."],
      ["When it is too high", "Overly high self-esteem can be a problem too. Some people overestimate their skills or feel entitled to success without the abilities to back it up. They may have relationship problems and resist self-improvement because they see themselves as perfect. The aim is balance."],
      ["Where it comes from", "Psychologist Abraham Maslow included esteem as a basic human need, saying people need both appreciation from others and inner self-respect. Experiences, relationships, and how you think about yourself all contribute."],
      ["Building it up", "You can improve your self-esteem by practicing kinder self-talk, setting realistic goals, and spending time with supportive people. If your self-esteem stays low and keeps holding you back, a mental health professional can help."]
    ]
  },
  {
    id: "what-is-wellness", category: "Wellness", title: "What Is Wellness?",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Global Wellness Institute", url: "https://globalwellnessinstitute.org/what-is-wellness/" },
    deck: "Wellness is something you actively practice through your choices and habits, and it covers much more than physical health.",
    sections: [
      ["A modern word with old roots", "The idea of wellness as both preventive and holistic goes back to ancient civilizations in places like India, China, Greece, and Rome. It gained more visibility in the 1960s and 70s through writers and physicians who promoted healthy living. Today it informs fitness, nutrition, self-care, and many other everyday practices."],
      ["An active pursuit", "The Global Wellness Institute defines wellness as the active pursuit of activities, choices, and lifestyles that lead to holistic health. It is not a passive state. It involves intention, choices, and action as you work toward your best health and well-being. It is an individual effort, but it is also shaped by the physical, social, and cultural environment around you."],
      ["How it differs from health, wellbeing, and happiness", "Wellness is often mixed up with these terms. The difference is that health, wellbeing, and happiness describe a state of being, while wellness is an ongoing process of being aware and making choices that move you toward them."],
      ["Six dimensions", "Most models of wellness include at least six areas that work together. Physical means nourishing your body through exercise, nutrition, and sleep. Mental means engaging with the world through learning, problem-solving, and creativity. Emotional means being aware of and expressing your feelings and understanding others'. Spiritual means searching for meaning and purpose. Social means connecting meaningfully with others and your community. Environmental means the link between your choices and the health of the planet."],
      ["Prevention, not just treatment", "The article describes a continuum. At one end, people with poor health use medical care reactively to treat illness. At the other end, people focus on prevention and building vitality with attitudes and lifestyles that improve their health and quality of life. Wellness sits on that proactive side."]
    ]
  },
  {
    id: "dimensions-of-wellness", category: "Wellness", title: "Dimensions of Wellness: Change Your Habits, Change Your Life",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Stoewen, Canadian Veterinary Journal (via NIH/PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5508938/" },
    deck: "Wellness has eight connected dimensions, and habits are what make lasting change possible.",
    sections: [
      ["Living life fully", "Wellness is a whole-person approach that brings together physical, mental, and spiritual well-being. It is about more than striving for health. It is about living fully and becoming the best person your circumstances allow. The author wrote for veterinary professionals, but the ideas apply to anyone, since looking after yourself is the foundation for caring for others."],
      ["Eight connected dimensions", "The article describes eight areas: physical (caring for your body), intellectual (staying curious and learning), emotional (understanding and managing your feelings), social (healthy relationships and contributing to your community), spiritual (finding purpose and meaning), vocational (meaningful work), financial (living within your means and planning ahead), and environmental (how your surroundings affect you and how your habits affect the planet)."],
      ["Balance does not mean equal", "Neglecting one area for long can affect the others, and ultimately your health and quality of life. But the dimensions do not have to be perfectly balanced. The goal is a personal harmony that feels authentic to you, since everyone has different priorities."],
      ["Why knowing is not enough", "We often know what is good for us but slide back into old ways. Two factors matter here: self-regulation and habits. Self-regulation is your ability to direct your behavior toward your goals, but it takes mental effort, and the brain likes to save energy. Habits take very little effort, and about 40 percent of everyday behavior is repeated habit."],
      ["How habits work", "A habit follows a loop: a cue triggers a routine that brings a reward. Habits are hard to erase, but they can be replaced. The trick is to keep the old cue and reward and insert a new routine. This is why change takes more than willpower."],
      ["Set yourself up for success", "Know your own tendencies, use several strategies together, and be patient. On average, a new habit takes around two months to form, so give yourself time and gently restart if you slip."]
    ]
  },
  {
    id: "healthy-relationships", category: "Relationships", title: "Healthy Relationships and Mental Wellbeing",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "NHS Every Mind Matters", url: "https://www.nhs.uk/every-mind-matters/lifes-challenges/maintaining-healthy-relationships-and-mental-wellbeing/" },
    deck: "Relationships, including the one you have with yourself, are vital to wellbeing, and good ones take effort.",
    sections: [
      ["Why relationships matter", "People with healthy, supportive relationships are more likely to be happier and healthier. Good connections can also help with loneliness and with problems such as stress and anxiety."],
      ["Start with yourself", "How you treat yourself affects how well you look after yourself and handle hard times. Many thoughts are automatic, so try noticing whether yours are negative. If they are, challenge them. If positive thinking feels unrealistic, try a neutral alternative. For example, change \"I had lots to do and I've done nothing. I'm useless\" into \"Not every day can be good, but that's OK because I can try again tomorrow.\""],
      ["Build healthy relationships with others", "Good relationships need work. Key ingredients are respect, support, and open, honest conversation. Be an active listener by repeating back what someone said or asking for more detail to check you understood. Check in regularly so problems do not pile up, and consider setting a regular time to talk or writing a message if speaking feels hard."],
      ["Supporting someone through a hard time", "Helping a friend or partner can be upsetting for you too, so protect your own wellbeing. Set boundaries about what you feel able to help with, such as listening or doing the shopping. Make time for your own hobbies. Talk to someone you trust outside the situation."],
      ["Handling conflict", "Disagreements are normal, but unresolved arguments can affect your mental health. If it is hard to talk calmly, take time out and return when everyone is calmer. It can help to ask yourself: what meaning have I given this situation, what are the facts versus my opinion, what advice would I give someone else, and is there another way to look at it?"],
      ["It is okay to leave", "It is okay to leave a relationship that does not feel right or harms your mental health. If you experience any kind of abuse, support is available, and reaching out to a trusted person or local service is a good first step."]
    ]
  },
  {
    id: "self-improvement-guide", category: "Self-Growth", title: "A Beginner's Guide to Continuous Self-Improvement",
    readTime: 3, image: "article-cover.jpg",
    source: { name: "James Clear", url: "https://jamesclear.com/self-improvement" },
    deck: "Self-improvement starts with honest self-awareness and the ability to change your habits, one small system at a time.",
    sections: [
      ["What self-improvement is", "Self-improvement means improving your knowledge, status, or character through your own effort. It is the effort to become better in any area of life, from skills and health to how you spend your time."],
      ["Start with self-awareness", "James Clear says self-improvement almost always begins with self-awareness and the ability to change your habits. If you want to get better at something, one of the first steps is to know exactly where you stand, even if it is uncomfortable. You cannot improve what you are not honest about."],
      ["Goals versus systems", "Many of us begin with a specific, actionable goal. Clear argues that a better approach is to focus on systems, meaning the daily routines that carry you toward a result. A goal tells you where you want to go, while a system is how you actually get there, and it keeps working even when motivation fades."],
      ["Areas you can work on", "The guide points to topics such as productivity and time management, focus and concentration, and eating healthy and sticking to it. It also covers deliberate practice, the idea of mastering one thing at a time, and using strategies to build better habits."],
      ["Keep learning", "He recommends reading as a way to keep improving and suggests classic books such as Meditations by Marcus Aurelius and Manual for Living by Epictetus. Progress comes from steady effort, so keep going."]
    ]
  },
  {
    id: "self-improvement-strategies", category: "Self-Growth", title: "Unlocking Your Potential: Self-Improvement Strategies",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Thriveworks", url: "https://thriveworks.com/help-with/self-improvement/self-improvement-strategies/" },
    deck: "Self-improvement is a deliberate, lifelong process, and there are practical tools for goals, confidence, and resilience.",
    sections: [
      ["A deliberate, lifelong process", "Self-improvement means consciously working to grow in areas such as character, learning, health, career, relationships, money, and values. It is personal, so it looks different for everyone, and it continues throughout life."],
      ["Techniques to try", "Helpful approaches include setting goals, practicing self-care, building a growth mindset, journaling, and practicing mindfulness. Asking for feedback from people you trust and volunteering can also help you grow and gain perspective."],
      ["Set meaningful goals", "Make your goals specific and realistic, such as using the SMART approach, and break them into smaller steps. This makes progress easier to see and keeps you motivated."],
      ["Build confidence and resilience", "To build confidence, accept yourself, set achievable goals, and take small risks. To build resilience, focus on your support network, look after your health, and treat setbacks as chances to learn. Resilience grows when you keep going after difficulties."],
      ["Manage your time and keep learning", "Effective time management leaves room for what matters and for rest. Keep learning through books, courses, and new experiences to continue growing."],
      ["Therapy can help", "If deeper struggles are getting in the way of growth, therapy can help. Asking for support is a strong step toward growth."]
    ]
  },
  {
    id: "what-is-a-relationship", category: "Relationships", title: "What Is a Relationship?",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "MyTherapist.ie (written by Dr Elaine Ryan, PsychD)", url: "https://mytherapist.ie/relationships/what-is-a-relationship/" },
    deck: "A relationship is any connection between people, not only romance, and your relationship with yourself matters too.",
    sections: [
      ["More than romance", "A relationship is any connection between two or more people. Many of us picture romantic partners first, but friendships, family ties, and work connections matter just as much, and they all shape how we feel day to day."],
      ["How friends, family, and coworkers connect", "Relationships change as we grow. A young child may call a playmate they just met their best friend, while adult friendships develop slowly as trust and respect deepen. Family relationships include parents and children, siblings, and in some cases parents who are also partners. Work relationships can be good or difficult, and sometimes a manager asks for support when someone struggles to get along with their team."],
      ["What romantic relationships look like", "Romantic relationships are usually built on strong feelings of love and attraction. The early passion often softens over time, while emotional closeness and understanding grow. These relationships are usually exclusive, meaning both people commit to each other."],
      ["Your relationship with yourself", "The article argues that all relationships take time and commitment to thrive, and they can improve when people honestly look at how they behave in them. Many people, including the author, pour their energy into partners and neglect their own needs. Treating yourself with the same care you would give a partner, such as preparing a nice meal or prioritizing sleep, is a healthy place to start."],
      ["When mental health affects relationships", "Problems can begin within you, such as difficulty expressing emotions, anxiety, depression, or certain forms of OCD. The attachment style you developed as an adult also shapes how you relate to others. Other problems come from outside, such as an abusive or toxic relationship. Counselling can help people communicate better, express hard feelings without hurting others, and get their needs met."]
    ]
  },
  {
    id: "social-connections-for-mental-wellbeing", category: "Relationships", title: "Social Connections for Mental Wellbeing",
    readTime: 3, image: "article-cover.jpg",
    source: { name: "NHS Inform (Scotland)", url: "https://www.nhsinform.scot/healthy-living/mental-wellbeing/social-connections-for-mental-wellbeing" },
    deck: "Feeling connected to family, friends, and your community can make you feel happier, more secure, and more like you belong.",
    sections: [
      ["Why connection matters", "Mental wellbeing means feeling good about yourself and the world around you, and relationships with family, friends, and your community play a big part in it. Social connections can make you feel happier and more secure, and they give you a stronger sense of purpose, belonging, and self-worth. Being around people who have good mental wellbeing can also lift your own."],
      ["Meet new people", "You can meet new people by volunteering at a school, hospital, or community group, starting conversations in social situations, or joining a new club or activity. Volunteering can be especially rewarding because you work with others toward a shared goal, which can make you feel more satisfied with life."],
      ["Strengthen family ties", "Try to spend some time with family every day. You could set a regular family time, switch off the TV so you can focus on each other, or make regular calls with relatives who live far away. Calls and video chats are often more meaningful than constant texting. Visiting someone who needs support or company is another good way to connect."],
      ["Reconnect with friends, colleagues, and neighbours", "Arrange a day out with a friend you have not seen in a while, or have lunch with a colleague. Small, regular contact helps relationships stay strong."],
      ["Connect online, safely", "If illness or living in a rural area makes in-person contact hard, digital tools can help you stay in touch or find people with similar interests through forums and video calls. Be cautious with people you have never met in person. Never send money, goods, or bank details to someone you have not met."]
    ]
  },
  {
    id: "how-to-improve-your-wellness", category: "Wellness", title: "How to Improve Your Wellness",
    readTime: 5, image: "article-cover.jpg",
    source: { name: "Psychology Today (posted 17 September 2018, reviewed by Ekua Hagan)", url: "https://www.psychologytoday.com/us/blog/modern-mentality/201809/how-improve-your-wellness" },
    deck: "Wellness is more than being free of illness. Looking at its many areas can help you improve your health and mood.",
    sections: [
      ["Wellness is more than not being sick", "When someone asks how you are, you may automatically say \"well\" without thinking about what that really means. Wellness is not only the absence of illness. It also includes satisfaction, joy, and purpose. Paying attention to your wellness is a powerful way to protect your mental health and overall well-being."],
      ["Many models, one message", "Experts describe wellness in different ways. Some models list six areas, while the U.S. government's SAMHSA highlights eight. The names vary, but the message is the same: these areas interact, so doing well in one cannot fully make up for neglecting another. A promotion with a big bonus, for example, could cost you physical health and family time if it means fewer walks and less time at home."],
      ["Physical health and work", "Exercise has a strong link with mental wellbeing, and even a single session may improve your mood. Nutrition and sleep also matter, since nutrient deficiencies and poor sleep have been linked with low mood and loneliness. Job satisfaction affects mental health more than many people expect. In one study, people unhappy with their jobs reported more depression, sleep problems, and worry. Loneliness at work was linked to fewer promotions and more job changes."],
      ["Money, friendships, and creativity", "Income in general does not strongly predict happiness, but worries about money do affect mental health. Friendships support happiness, confidence, and a sense of belonging, and loneliness has been linked with anxiety, depression, and physical problems. Creative activities such as drawing, writing, or music give you a way to express feelings that are hard to put into words, and they can lift positive emotions and ease stress."],
      ["Your surroundings and digital life", "The places where you live, learn, and work affect your health. High-stress workplaces can harm both body and mind. Digital life matters too. Heavy social media use has been linked with feelings of isolation, and the article suggests asking yourself whether your phone use is essential or simply mindless scrolling."],
      ["Reflect and choose one step", "The article suggests reflection questions for each area, such as rating your physical health from 1 to 10, naming the three people you spend the most time with, or asking how your digital habits affect you. Use your answers to choose one area to work on first."]
    ]
  },
  {
    id: "six-tips-for-self-growth", category: "Self-Growth", title: "Six Tips for Self-Growth",
    readTime: 4, image: "article-cover.jpg",
    source: { name: "Psychology Today (by Zamfira Parincu and Tchiki Davis, PhD)", url: "https://www.psychologytoday.com/us/blog/click-here-for-happiness/202309/six-tips-for-self-growth" },
    deck: "Self-growth means building new skills and attitudes that improve your life, and small daily practices can help you start.",
    sections: [
      ["What self-growth means", "Self-growth, also called personal growth or personal development, is the process of building new skills, attitudes, and reactions that improve your life and well-being. It often strengthens self-esteem and coping skills, and it can change your priorities and how much you appreciate life. It looks different for everyone, from learning to control your emotions and building resilience to beating procrastination."],
      ["Why it matters", "Growth pushes you beyond your comfort zone, into a space where you can set new goals and find your purpose. It also connects to what Abraham Maslow called self-actualization, the stage where people move beyond basic needs toward fulfillment. Without any growth, the article warns, people can drift into passivity later in life."],
      ["Build a growth mindset", "A growth mindset is the belief that your intelligence and talents can develop over time. A fixed mindset assumes your abilities are set, so if you are not good at something now, you may think you never will be. The article cites research showing people with a growth mindset tend to achieve more at school, at work, and in their personal lives, and that this outlook makes it easier to keep working on yourself."],
      ["Meditate and journal", "Meditation helps you practice self-awareness, a key skill for growth, and it has benefits for both mental and physical health. Journaling can ease stress and anxiety, and writing down your thoughts and actions helps you notice patterns you might otherwise miss."],
      ["Read and speak to yourself kindly", "Reading gives you insight into how people think, feel, and interact, which can broaden your perspective. The article also highlights positive affirmations and kind self-talk, which have been linked with less depression and can motivate you to start growing."],
      ["Be gentle and remove what does not help", "Growth does not mean you are not enough or that you must be perfect. Accepting yourself as you are creates a safe space to explore who you could become. The article also suggests that less can be more. Instead of only adding new skills or certificates, consider removing things that do not serve you, such as other people's expectations, self-limiting beliefs, and unhelpful stereotypes."]
    ]
  }
];

UH.featuredArticleIds = ["handling-life-stressors", "improving-self-esteem", "healthy-relationships"];

UH.articleCategories = ["Stress", "Self-Esteem", "Wellness", "Relationships", "Self-Growth"];

/* Community threads (Peer Support). `tags` use the filter keys on the Peer page. */
UH.threads = [
  { id: "exam-stress", title: "How do you cope with exam stress?", tags: ["stress", "academics"], replies: 67, views: 69, likes: 28, ago: "2hrs ago",
    excerpt: "Finals are coming up and I’m struggling to balance reviewing, deadlines, and sleep without burning out." },
  { id: "introducing-myself", title: "Hi everyone! Just introducing myself", tags: ["general"], replies: 42, views: 88, likes: 62, ago: "5hrs ago",
    excerpt: "I’m new to UniHelper and would love to hear how everyone is doing and what brought you here." },
  { id: "heavy-subjects", title: "Study tips for subjects that feel too heavy?", tags: ["academics"], replies: 35, views: 120, likes: 43, ago: "8hrs ago",
    excerpt: "I’m having a hard time keeping up with my lessons and would love to know your study methods." },
  { id: "career-path", title: "Feeling unsure about my career path", tags: ["life-future"], replies: 51, views: 97, likes: 31, ago: "1d ago",
    excerpt: "I’m close to graduating and I still don’t know what I want to do after college, does anyone relate?" },
  { id: "always-anxious", title: "Anxious all the time lately, is this normal?", tags: ["mental-health", "stress"], replies: 76, views: 143, likes: 57, ago: "1d ago",
    excerpt: "My mind keeps racing and I can’t seem to relax even when I have free time. How do you cope?" },
  { id: "free-time", title: "Looking for ways to spend free time on campus", tags: ["other"], replies: 28, views: 64, likes: 19, ago: "2d ago",
    excerpt: "Aside from studying, I’d like to find hobbies or clubs that fit my schedule. Any suggestions?" },
  { id: "university-life", title: "How did you adjust to university life?", tags: ["general", "life-future"], replies: 59, views: 110, likes: 38, ago: "2d ago",
    excerpt: "Moving from high school to college has been a big change for me, and I’d love to hear how you handled it." },
  { id: "talking-feelings", title: "How do you talk to someone about your feelings?", tags: ["mental-health"], replies: 83, views: 156, likes: 71, ago: "3d ago",
    excerpt: "I want to open up to a friend about what I’m going through, but I don’t know where to start." },
  { id: "too-many-things", title: "Overwhelmed by too many things at once", tags: ["stress", "other"], replies: 47, views: 92, likes: 26, ago: "4d ago",
    excerpt: "Between family responsibilities, part-time work, and school, I feel stretched thin. How do you manage?" }
];

UH.threadTags = [
  { key: "general", label: "General" },
  { key: "academics", label: "Academics" },
  { key: "life-future", label: "Life & Future" },
  { key: "relationships", label: "Relationships" },
  { key: "mental-health", label: "Mental Health" },
  { key: "stress", label: "Stress" },
  { key: "other", label: "Other" }
];
