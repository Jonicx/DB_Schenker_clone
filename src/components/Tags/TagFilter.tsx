import React from 'react';

interface Tag {
  id: string;
  label: string;
  active: boolean;
}

interface TagFilterProps {
  tags: Tag[];
  onTagClick: (tagId: string) => void;
}

export function TagFilter({ tags, onTagClick }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center px-2 py-2">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagClick(tag.id)}
          className={`px-5 py-3 rounded-full text-sm font-medium transition-colors
            ${tag.active 
              ? 'bg-[#167d86] text-white' 
              : 'bg-white text-[#167d86] shadow-md hover:shadow-md'} 
            border border-none`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className='font-medium text-base'>{tag.label}</span>
            <span className='font-bold text-xl'>{tag.active ? '×' : '+'}</span>
          </div>
        </button>
      ))}
    </div>
  );
}