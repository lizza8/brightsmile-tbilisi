import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  image: string;
}

const Team = () => {
  const { t } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: t.team.members.nino.name,
      role: t.team.members.nino.role,
      credentials: t.team.members.nino.credentials,
      experience: t.team.members.nino.experience,
      image: 'https://c.animaapp.com/mka9d48hGklxuE/img/ai_3.png',
    },
    {
      id: '2',
      name: t.team.members.giorgi.name,
      role: t.team.members.giorgi.role,
      credentials: t.team.members.giorgi.credentials,
      experience: t.team.members.giorgi.experience,
      image: 'https://c.animaapp.com/mka9d48hGklxuE/img/ai_5.png',
    },
    {
      id: '3',
      name: t.team.members.mariam.name,
      role: t.team.members.mariam.role,
      credentials: t.team.members.mariam.credentials,
      experience: t.team.members.mariam.experience,
      image: 'https://c.animaapp.com/mka9d48hGklxuE/img/ai_3.png',
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background fade-in-section">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-sm lg:text-headline text-foreground mb-4">{t.team.title}</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="relative overflow-hidden border-border bg-card group cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent transition-opacity duration-300 ${
                    hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                    <p className="text-sm font-light mb-2">{member.credentials}</p>
                    <p className="text-sm font-light">{member.experience}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-2">{member.name}</h3>
                <p className="text-foreground/70">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
