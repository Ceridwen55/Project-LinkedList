import { Node } from './node.js';

export function LinkedList ()
{
    let head = null;

    const append = (value) => 
    {
        const newNode = Node(value);
        if(head === null)
        {
            head = newNode
        }
        else
        {
            let current = head;
            while(current.nextNode !== null)
            {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    };

    const prepend = (value) =>
    {
        const newNode = Node(value);
        newNode.nextNode = head;
        head = newNode;
    };

    const size= () =>
    {
        let count = 0;
        let current = head;
        while (current !== null)
        {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    const getHead = () => 
    {
        return head;
    };
    
      
      const tail = () => 
    {
        let current = head;
        if (current === null) 
            {
                return null; 
            }
        while (current.nextNode !== null) 
            {
                current = current.nextNode;
            }
        return current;
    };
    
     
      const at = (index) => 
    {
        let current = head;
        let count = 0;
        while (current !== null && count < index) 
        {
          current = current.nextNode;
          count++;
        }
        return current; 
    };
    
      
      const pop = () => 
    {
        if (head === null) return null; 
        if (head.nextNode === null) 
        {
          head = null; 
          return;
        }
        let current = head;
        while (current.nextNode.nextNode !== null) 
        {
          current = current.nextNode;
        }
        current.nextNode = null; 
    };
    
      
      const contains = (value) => 
    {
        let current = head;
        while (current !== null) 
        {
          if (current.value === value) 
        {
            return true;
        }
          current = current.nextNode;
        }
        return false;
    };
    
      
      const find = (value) => 
    {
        let current = head;
        let index = 0;
        while (current !== null) 
        {
          if (current.value === value) 
            {
                return index;
            }
          current = current.nextNode;
          index++;
        }
        return null; 
    };
    
      
      const toString = () => 
    {
        let current = head;
        let output = '';
        while (current !== null) 
        {
          output += `( ${current.value} ) -> `;
          current = current.nextNode;
        }
        return output + 'null';
      };
    
      return {
        append,
        prepend,
        size,
        getHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
      };


};

