import React, { useState, useMemo } from 'react';
import { TagFilter } from './TagFilter';
import { TagArticleCard } from './TagArticles';
import { Carousel } from '../../tools/Carousel';
import { TagsArticles } from '../../data/TagsArticles';

const allTags = Array.from(
  new Set(TagsArticles.flatMap(article => article.tags))
).map(tag => ({
  id: tag,
  label: tag,
  active: false
}));

export default function TagCarousel() {
  const [tags, setTags] = useState(allTags);

  const handleTagClick = (tagId: string) => {
    setTags(tags.map(tag => 
      tag.id === tagId ? { ...tag, active: !tag.active } : tag
    ));
  };

  const filteredArticles = useMemo(() => {
    const activeTags = tags.filter(tag => tag.active).map(tag => tag.id);
    if (activeTags.length === 0) return TagsArticles;
    
    return TagsArticles.filter(article =>
      activeTags.every(tag => article.tags.includes(tag))
    );
  }, [tags]);

  return (
    <div className="min-h-screen bg-gray-100 p-10 pb-24">
      <div className="max-w-[90rem] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-3xl font-normal text-center mb-2 pt-10">
          Personally recommended to you
        </h1>
        
        <div className="w-full flex justify-center mb-8">
          <TagFilter tags={tags} onTagClick={handleTagClick} />
        </div>
        
        <Carousel>
          {filteredArticles.map(article => (
            <TagArticleCard key={article.id} article={article} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

// export default TagCarousel;