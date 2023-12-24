'use client';
import React, { useState } from 'react';
import VoteItem from '@/components/vote/VoteItem';
import HoveringButton from '@/components/common/HoveringButton';
import { useSession } from '@/hooks/useSession';

const VOTE_ITEMS = [
  { team: '로컬무드', name: '김지원', id: 11 },
  { team: '로컬무드', name: '김현민', id: 12 },
  { team: '레디', name: '노이진', id: 13 },
  { team: '갓챠', name: '변지혜', id: 14 },
  { team: '스니프', name: '송지석', id: 15 },
  { team: '레디', name: '신동현', id: 16 },
  { team: '스니프', name: '오대균', id: 17 },
  { team: '셰어마인드', name: '이규호', id: 18 },
  { team: '갓챠', name: '이은비', id: 19 },
  { team: '셰어마인드', name: '정인영', id: 20 },
];
const VOTE_ITEMS2 = [
  { team: '로컬무드', name: '김경민', id: 1 },
  { team: '셰어마인드', name: '이소현', id: 2 },
  { team: '레디', name: '이영교', id: 3 },
  { team: '셰어마인드', name: '이유정', id: 4 },
  { team: '스니프', name: '이윤서', id: 5 },
  { team: '갓챠', name: '이윤정', id: 6 },
  { team: '갓챠', name: '이종미', id: 7 },
  { team: '스니프', name: '조윤주', id: 8 },
  { team: '로컬무드', name: '최예원', id: 9 },
  { team: '레디', name: '최현수', id: 10 },
];

const Page = () => {
  const [selected, setSelected] = useState('');
  const session = useSession();
  const voteItems = session?.part === 'FE' ? VOTE_ITEMS : VOTE_ITEMS2;
  const token = session?.accessToken;
  const handleVote = async () => {
    const selectedVoteItem = VOTE_ITEMS.find((item) => item.name === selected);
    if (!selectedVoteItem) {
      console.error('No selection made');
      return;
    }
    try {
      const headers = new Headers();
      headers.set('AUTHORIZATION', token!);

      const res = await fetch('/api/v1/part-leader/votes', {
        method: 'POST',
        body: JSON.stringify({
          id: selectedVoteItem.id,
        }),
        headers,
      });
      if (res.ok) {
        location.replace('/partvote/result');
      }
    } catch (error) {
      console.error('투표 실패:', error);
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">파트장 투표</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {voteItems.map((item, index) => (
            <VoteItem
              key={index}
              team={item.team}
              name={item.name}
              selected={selected === item.name}
              onChange={() => setSelected(item.name)}
              isPart={true}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <HoveringButton
          handleClickButton={handleVote}
          buttonStyle="w-[100px] h-[60px] mt-4 md:w-[200px]"
        >
          투표하기
        </HoveringButton>
      </div>
    </div>
  );
};

export default Page;
