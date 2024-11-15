import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { AtivoInvestimento } from '../../ativo_investimento/entities/ativo_investimento.entity';
import { CategoriaUsuario } from '../../categoria_usuario/entities/categoria_usuario.entity';

@Entity('categoria_investimento')
export class CategoriaInvestimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  desc_categoria: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_criacao: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_atualizacao: Date;
}
